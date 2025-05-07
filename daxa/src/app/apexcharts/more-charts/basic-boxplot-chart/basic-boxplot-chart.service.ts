import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
    providedIn: 'root'
})
export class BasicBoxplotChartService {

    private isBrowser: boolean;

    constructor(@Inject(PLATFORM_ID) private platformId: any) {
        this.isBrowser = isPlatformBrowser(this.platformId);
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
                            name: 'Box',
                            type: 'boxPlot',
                            data: [
                                {
                                    x: new Date('2017-01-01').getTime(),
                                    y: [54, 66, 69, 75, 88]
                                },
                                {
                                    x: new Date('2018-01-01').getTime(),
                                    y: [43, 65, 69, 76, 81]
                                },
                                {
                                    x: new Date('2019-01-01').getTime(),
                                    y: [31, 39, 45, 51, 59]
                                },
                                {
                                    x: new Date('2020-01-01').getTime(),
                                    y: [39, 46, 55, 65, 71]
                                },
                                {
                                    x: new Date('2021-01-01').getTime(),
                                    y: [29, 31, 35, 39, 44]
                                }
                            ]
                        },
                        {
                            name: 'Outliers',
                            type: 'scatter',
                            data: [
                                {
                                    x: new Date('2017-01-01').getTime(),
                                    y: 32
                                },
                                {
                                    x: new Date('2018-01-01').getTime(),
                                    y: 25
                                },
                                {
                                    x: new Date('2019-01-01').getTime(),
                                    y: 64
                                },
                                {
                                    x: new Date('2020-01-01').getTime(),
                                    y: 27
                                },
                                {
                                    x: new Date('2020-01-01').getTime(),
                                    y: 78
                                },
                                {
                                    x: new Date('2021-01-01').getTime(),
                                    y: 15
                                }
                            ]
                        }
                    ],
                    chart: {
                        height: 350,
                        type: "boxPlot",
                        toolbar: {
                            show: true
                        }
                    },
                    colors: [
                        '#0f79f3', '#e74c3c'
                    ],
                    title: {
                        text: 'BoxPlot - Scatter Chart',
                        align: 'left',
                        offsetX: -9,
                        style: {
                            fontWeight: '500',
                            fontSize: '15px',
                            color: '#475569'
                        }
                    },
                    xaxis: {
                        type: 'datetime',
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
                    tooltip: {
                        shared: false,
                        intersect: true
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
                    },
                    grid: {
                        show: true,
                        strokeDashArray: 5,
                        borderColor: "#e0e0e0"
                    },
                    legend: {
                        offsetY: -5,
                        position: "top",
                        fontSize: "14px",
                        horizontalAlign: "center",
                        labels: {
                            colors: '#919aa3'
                        },
                        itemMargin: {
                            horizontal: 10,
                            vertical: 0
                        }
                    }
                };

                // Initialize and render the chart
                const chart = new ApexCharts(document.querySelector('#basic_boxplot_chart'), options);
                chart.render();
            } catch (error) {
                console.error('Error loading ApexCharts:', error);
            }
        }
    }

}