import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
    providedIn: 'root'
})
export class MultipleYaxisChartService {

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
                            name: "Income",
                            type: "column",
                            data: [1.4, 2, 2.5, 1.5, 2.5, 2.8, 3.8, 4.6]
                        },
                        {
                            name: "Cashflow",
                            type: "column",
                            data: [1.1, 3, 3.1, 4, 4.1, 4.9, 6.5, 8.5]
                        },
                        {
                            name: "Revenue",
                            type: "line",
                            data: [20, 29, 37, 36, 44, 45, 50, 58]
                        }
                    ],
                    chart: {
                        height: 350,
                        type: "line",
                        stacked: false
                    },
                    dataLabels: {
                        enabled: false
                    },
                    stroke: {
                        width: [1, 1, 4]
                    },
                    title: {
                        text: "XYZ - Stock Analysis (2009 - 2016)",
                        align: "left",
                        offsetX: 110,
                        style: {
                            fontWeight: '500',
                            fontSize: '15px',
                            color: '#475569'
                        }
                    },
                    xaxis: {
                        categories: [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016],
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
                    yaxis: [
                        {
                            axisTicks: {
                                show: true
                            },
                            axisBorder: {
                                show: true,
                                color: "#e0e0e0"
                            },
                            labels: {
                                style: {
                                    colors: "#919aa3",
                                    fontSize: "14px"
                                }
                            },
                            title: {
                                text: "Income (thousand crores)",
                                style: {
                                    color: "#e74c3c",
                                    fontWeight: 400
                                }
                            },
                            tooltip: {
                                enabled: true
                            }
                        },
                        {
                            seriesName: "Income",
                            opposite: true,
                            axisTicks: {
                                show: true
                            },
                            axisBorder: {
                                show: true,
                                color: "#e0e0e0"
                            },
                            labels: {
                                style: {
                                    colors: "#919aa3",
                                    fontSize: "14px"
                                }
                            },
                            title: {
                                text: "Operating Cashflow (thousand crores)",
                                style: {
                                    color: "#0f79f3",
                                    fontWeight: 400
                                }
                            }
                        },
                        {
                            seriesName: "Revenue",
                            opposite: true,
                            axisTicks: {
                                show: true
                            },
                            axisBorder: {
                                show: true,
                                color: "#e0e0e0"
                            },
                            labels: {
                                style: {
                                    colors: "#919aa3",
                                    fontSize: "14px"
                                }
                            },
                            title: {
                                text: "Revenue (thousand crores)",
                                style: {
                                    color: "#796df6",
                                    fontWeight: 400
                                }
                            }
                        }
                    ],
                    tooltip: {
                        fixed: {
                            enabled: true,
                            position: "topLeft", // topRight, topLeft, bottomRight, bottomLeft
                            offsetY: 30,
                            offsetX: 60
                        }
                    },
                    grid: {
                        show: true,
                        strokeDashArray: 5,
                        borderColor: "#e0e0e0"
                    },
                    legend: {
                        horizontalAlign: "left",
                        fontSize: "14px",
                        offsetX: 40,
                        offsetY: 5,
                        labels: {
                            colors: "#919aa3"
                        },
                        itemMargin: {
                            horizontal: 10,
                            vertical: 5
                        }
                    }
                };

                // Initialize and render the chart
                const chart = new ApexCharts(document.querySelector('#multiple_yAxis_chart'), options);
                chart.render();
            } catch (error) {
                console.error('Error loading ApexCharts:', error);
            }
        }
    }

}