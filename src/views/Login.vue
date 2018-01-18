<template>
  <div class="container">
    <h3>Login</h3>
    <button class="btn btn-primary" @click="showQRCode = false">Email</button>
    <button class="btn btn-primary" @click="showQRCode = true">QRCode</button>
    <div class="col-md-6 offset-md-3" v-show="!showQRCode">
      <form>
        <div class="form-group">
          <label>Email address</label>
          <input type="text" class="form-control" placeholder="Enter email" v-model="username">
          <small class="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div class="form-group">
          <label>Password</label>
          <input type="password" class="form-control" placeholder="Password" v-model="password">
        </div>
        <button type="submit" class="btn btn-primary" @click.prevent="handleSubmit">Submit</button>
      </form>
    </div>
    <div class="col-md-6 offset-md-3" v-show="showQRCode">
      <canvas id="qr"></canvas>
    </div>
  </div>
</template>

<script>
import api from "@/api";
import uuid from "uuid/v4";
import { Socket } from "phoenix";
import QRious from "qrious";

export default {
  data: () => ({
    username: "",
    password: "",
    showQRCode: false,
    qrValue: "",
    uuid: uuid(),
    socket: null
  }),

  beforeDestroy() {
    this.socket.disconnect();
  },

  mounted() {
    this.qrValue =
      "http//o.clazz.im/barcode#login:" + this.uuid + `:web:${this.getOS()}`;
    console.log(this.qrValue);
    new QRious({
      element: document.getElementById("qr"),
      size: 500,
      value: this.qrValue
    });
  },

  created() {
    this.socket = new Socket("ws://192.168.2.106:4002/socket", {
      params: {
        uuid: this.uuid
      }
    });
    this.socket.connect();
    this.socket.onError(() =>
      console.log("there was an error with the connection!")
    );
    this.socket.onClose(() => console.log("the connection dropped"));
    this.loginChannel = this.socket.channel("login:" + this.uuid);
    this.loginChannel
      .join()
      .receive("ok", ({ messages }) =>
        console.log("join person channel ok", messages)
      )
      .receive("error", ({ reason }) => console.log("failed join", reason))
      .receive("timeout", () =>
        console.log("Networking issue. Still waiting...")
      );

    this.loginChannel.on("login_token", payload => {
      let data = payload.data;
      console.log(data);
    });

    // setTimeout(() => {
    //   console.log("disconnect socket");
    //   this.socket.disconnect();
    // }, 3000);
  },

  methods: {
    handleSubmit() {
      const params = {
        username: this.username,
        password: this.password,
        d: uuid()
      };
      this.$store.dispatch("login", params);
    },

    getOS() {
      let userAgent = window.navigator.userAgent,
        platform = window.navigator.platform,
        macosPlatforms = ["Macintosh", "MacIntel", "MacPPC", "Mac68K"],
        windowsPlatforms = ["Win32", "Win64", "Windows", "WinCE"],
        iosPlatforms = ["iPhone", "iPad", "iPod"],
        os = null;

      if (macosPlatforms.indexOf(platform) !== -1) {
        os = "macos";
      } else if (iosPlatforms.indexOf(platform) !== -1) {
        os = "ios";
      } else if (windowsPlatforms.indexOf(platform) !== -1) {
        os = "windows";
      } else if (/Android/.test(userAgent)) {
        os = "android";
      } else if (!os && /Linux/.test(platform)) {
        os = "linux";
      }

      return os;
    }
  }
};
</script>

<style scoped>
#qr {
  width: 400px;
  height: 400px;
}
</style>