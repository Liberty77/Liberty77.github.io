<template>
  <div>
    <h2>Container </h2>
    <pre>
          var headEndNodeAttrs = getTextByPathList(node, ["p:spPr", "a:ln", "a:headEnd", "attrs"]);
        var tailEndNodeAttrs = getTextByPathList(node, ["p:spPr", "a:ln", "a:tailEnd", "attrs"]);
        // type: none, triangle, stealth, diamond, oval, arrow
        if ( (headEndNodeAttrs !== undefined && (headEndNodeAttrs["type"] === "triangle" || headEndNodeAttrs["type"] === "arrow")) || 
             (tailEndNodeAttrs !== undefined && (tailEndNodeAttrs["type"] === "triangle" || tailEndNodeAttrs["type"] === "arrow")) ) {
            var triangleMarker = "<defs><marker id=\"markerTriangle\" viewBox=\"0 0 10 10\" refX=\"1\" refY=\"5\" markerWidth=\"5\" markerHeight=\"5\" orient=\"auto-start-reverse\" markerUnits=\"strokeWidth\"><path d=\"M 0 0 L 10 5 L 0 10 z\" /></marker></defs>";
            result += triangleMarker;
        }
        
        switch (shapType) {
            case "accentBorderCallout1":
            case "accentBorderCallout2":
            case "accentBorderCallout3":
            case "accentCallout1":
            case "accentCallout2":
            case "accentCallout3":
            case "actionButtonBackPrevious":
            case "actionButtonBeginning":
            case "actionButtonBlank":
            case "actionButtonDocument":
            case "actionButtonEnd":
            case "actionButtonForwardNext":
            case "actionButtonHelp":
            case "actionButtonHome":
            case "actionButtonInformation":
            case "actionButtonMovie":
            case "actionButtonReturn":
            case "actionButtonSound":
            case "arc":
            case "bevel":
            case "blockArc":
            case "borderCallout1":
            case "borderCallout2":
            case "borderCallout3":
            case "bracePair":
            case "bracketPair":
            case "callout1":
            case "callout2":
            case "callout3":
            case "can":
            case "chartPlus":
            case "chartStar":
            case "chartX":
            case "chevron":
            case "chord":
            case "cloud":
            case "cloudCallout":
            case "corner":
            case "cornerTabs":
            case "cube":
            case "decagon":
            case "diagStripe":
            case "diamond":
            case "dodecagon":
            case "donut":
            case "doubleWave":
            case "downArrowCallout":
            case "ellipseRibbon":
            case "ellipseRibbon2":
            case "flowChartAlternateProcess":
            case "flowChartCollate":
            case "flowChartConnector":
            case "flowChartDecision":
            case "flowChartDelay":
            case "flowChartDisplay":
            case "flowChartDocument":
            case "flowChartExtract":
            case "flowChartInputOutput":
            case "flowChartInternalStorage":
            case "flowChartMagneticDisk":
            case "flowChartMagneticDrum":
            case "flowChartMagneticTape":
            case "flowChartManualInput":
            case "flowChartManualOperation":
            case "flowChartMerge":
            case "flowChartMultidocument":
            case "flowChartOfflineStorage":
            case "flowChartOffpageConnector":
            case "flowChartOnlineStorage":
            case "flowChartOr":
            case "flowChartPredefinedProcess":
            case "flowChartPreparation":
            case "flowChartProcess":
            case "flowChartPunchedCard":
            case "flowChartPunchedTape":
            case "flowChartSort":
            case "flowChartSummingJunction":
            case "flowChartTerminator":
            case "folderCorner":
            case "frame":
            case "funnel":
            case "gear6":
            case "gear9":
            case "halfFrame":
            case "heart":
            case "heptagon":
            case "hexagon":
            case "homePlate":
            case "horizontalScroll":
            case "irregularSeal1":
            case "irregularSeal2":
            case "leftArrow":
            case "leftArrowCallout":
            case "leftBrace":
            case "leftBracket":
            case "leftRightArrowCallout":
            case "leftRightRibbon":
            case "irregularSeal1":
            case "lightningBolt":
            case "lineInv":
            case "mathDivide":
            case "mathEqual":
            case "mathMinus":
            case "mathMultiply":
            case "mathNotEqual":
            case "mathPlus":
            case "moon":
            case "nonIsoscelesTrapezoid":
            case "noSmoking":
            case "octagon":
            case "parallelogram":
            case "pentagon":
            case "pie":
            case "pieWedge":
            case "plaque":
            case "plaqueTabs":
            case "plus":
            case "quadArrowCallout":
            case "rect":
            case "ribbon":
            case "ribbon2":

        </pre>
  </div>
</template>

<script>
export default {
  name: "test-container"
};
</script>

