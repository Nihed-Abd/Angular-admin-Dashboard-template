import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
    providedIn: 'root'
})
export class BrushLineChartService {

    private isBrowser: boolean;

    constructor(@Inject(PLATFORM_ID) private platformId: any) {
        this.isBrowser = isPlatformBrowser(this.platformId);
    }

    public generateDayWiseTimeSeries(baseval:any, count:any, yrange:any) {
        var i = 0;
        var series = [];
        while (i < count) {
            var x = baseval;
            var y =
                Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
            series.push([x, y]);
            baseval += 86400000;
            i++;
        }
        return series;
    }

    async loadChart(): Promise<void> {
        if (this.isBrowser) {
            try {
                // Dynamically import ApexCharts
                const ApexCharts = (await import('apexcharts')).default;

                // Define chart options
                const options = {
                    series: [
                        {
                            name: "series1",
                            data: this.generateDayWiseTimeSeries(
                                new Date("11 Feb 2017").getTime(),
                                185,
                                {
                                    min: 0,
                                    max: 20
                                }
                            )
                        }
                    ],
                    chart: {
                        id: "chart2",
                        type: "line",
                        height: 210,
                        toolbar: {
                            autoSelected: "pan",
                            show: false
                        }
                    },
                    colors: [
                        "#0f79f3"
                    ],
                    stroke: {
                        width: 3
                    },
                    dataLabels: {
                        enabled: false
                    },
                    fill: {
                        opacity: 1
                    },
                    markers: {
                        size: 0
                    },
                    grid: {
                        show: true,
                        strokeDashArray: 5,
                        borderColor: "#e0e0e0",
                        row: {
                            colors: ["#f4f6fc", "transparent"], // takes an array which will be repeated on columns
                            opacity: 0.5
                        }
                    },
                    xaxis: {
                        type: "datetime",
                        axisBorder: {
                            show: false,
                            color: '#e0e0e0'
                        },
                        axisTicks: {
                            show: true,
                            color: '#e0e0e0'
                        },
                        labels: {
                            show: true,
                            style: {
                                colors: "#919aa3",
                                fontSize: "14px"
                            }
                        }
                    },
                    yaxis: {
                        tickAmount: 2,
                        labels: {
                            show: true,
                            style: {
                                colors: "#919aa3",
                                fontSize: "14px"
                            }
                        },
                        axisBorder: {
                            show: false
                        }
                    }
                };

                // Initialize and render the chart
                const chart = new ApexCharts(document.querySelector('#brush_line_chart'), options);
                chart.render();
            } catch (error) {
                console.error('Error loading ApexCharts:', error);
            }
        }
    }

}