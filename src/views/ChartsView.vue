<template>
  <div>
    <div id="chart1" class="chart"></div>
    <div id="chart2" class="chart"></div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import Highcharts from 'highcharts'

onMounted(() => {
  function synchronizeCrosshairs(chart) {
    Highcharts.Pointer.prototype.reset = function () {
      return undefined
    }

    Highcharts.Point.prototype.highlight = function (event) {
      this.onMouseOver()
      this.series.chart.tooltip.refresh(this)
      this.series.chart.xAxis[0].drawCrosshair(event, this)
    }

    Highcharts.addEvent(chart.container, 'mousemove', function (e) {
      if (chart.series.length > 0) {
        const points = chart.series[0].points
        if (points && points.length > 0) {
          const point = chart.series[0].searchPoint(e, true)
          if (point) {
            point.highlight(e)
          }
        }
      }
    })
  }

  const chart1 = Highcharts.chart('chart1', {
    chart: {
      marginLeft: 40,
      spacingTop: 20,
      spacingBottom: 20
    },
    title: {
      text: 'Speed',
      align: 'left',
      margin: 0,
      x: 30
    },
    series: [
      {
        name: 'speed',
        data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0]
      }
    ]
  })

  const chart2 = Highcharts.chart('chart2', {
    chart: {
      type: 'area',
      marginLeft: 40,
      spacingTop: 20,
      spacingBottom: 20
    },
    title: {
      text: 'Elevation',
      align: 'left',
      margin: 0,
      x: 30
    },
    series: [
      {
        name: 'elevation',
        data: [144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
        color: 'purple',
        fillColor: {
          linearGradient: [0, 0, 0, 300],
          stops: [
            [0, Highcharts.color('purple').setOpacity(0.5).get('rgba')],
            [1, Highcharts.color('white').setOpacity(0).get('rgba')]
          ]
        }
      }
    ]
  })

  synchronizeCrosshairs(chart1)
  synchronizeCrosshairs(chart2)
})
</script>

<style>
.chart {
  height: 400px;
}
</style>
