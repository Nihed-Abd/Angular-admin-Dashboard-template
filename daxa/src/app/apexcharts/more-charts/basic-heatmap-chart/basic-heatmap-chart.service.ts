import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
    providedIn: 'root'
})
export class BasicHeatmapChartService {

    private isBrowser: boolean;

    constructor(@Inject(PLATFORM_ID) private platformId: any) {
        this.isBrowser = isPlatformBrowser(this.platformId);
    }

    public generateData(count:any, yrange:any) {
        var i = 0;
        var series = [];
        while (i < count) {
        var x = "w" + (i + 1).toString();
        var y =
            Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
            series.push({
                x: x,
                y: y
            });
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
                            name: "Metric 1",
                            data: this.generateData(18, {
                                min: 0,
                                max: 90
                            })
                        },
                        {
                            name: "Metric 2",
                            data: this.generateData(18, {
                                min: 0,
                                max: 90
                            })
                        },
                        {
                            name: "Metric 3",
                            data: this.generateData(18, {
                                min: 0,
                                max: 90
                            })
                        },
                        {
                            name: "Metric 4",
                            data: this.generateData(18, {
                                min: 0,
                                max: 90
                            })
                        },
                        {
                            name: "Metric 5",
                            data: this.generateData(18, {
                                min: 0,
                                max: 90
                            })
                        },
                        {
                            name: "Metric 6",
                            data: this.generateData(18, {
                                min: 0,
                                max: 90
                            })
                        },
                        {
                            name: "Metric 7",
                            data: this.generateData(18, {
                                min: 0,
                                max: 90
                            })
                        },
                        {
                            name: "Metric 8",
                            data: this.generateData(18, {
                                min: 0,
                                max: 90
                            })
                        },
                        {
                            name: "Metric 9",
                            data: this.generateData(18, {
                                min: 0,
                                max: 90
                            })
                        }
                    ],
                    chart: {
                        height: 350,
                        type: "heatmap",
                        toolbar: {
                            show: true
                        }
                    },
                    dataLabels: {
                        enabled: false
                    },
                    colors: [
                        "#0f79f3"
                    ],
                    title: {
                        text: "HeatMap Chart (Single color)",
                        align: "left",
                        offsetX: -9,
                        style: {
                            fontWeight: '500',
                            fontSize: '15px',
                            color: '#475569'
                        }
                    },
                    grid: {
                        show: true,
                        strokeDashArray: 5,
                        borderColor: "#e0e0e0"
                    },
                    xaxis: {
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
                const chart = new ApexCharts(document.querySelector('#basic_heatmap_chart'), options);
                chart.render();
            } catch (error) {
                console.error('Error loading ApexCharts:', error);
            }
        }
    }

}