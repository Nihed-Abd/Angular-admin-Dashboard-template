import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
    providedIn: 'root'
})
export class LineAreaChartService {

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
                            name: "Team A",
                            type: "area",
                            data: [44, 55, 31, 47, 31, 43, 26, 41, 31, 47]
                        },
                        {
                            name: "Team B",
                            type: "line",
                            data: [55, 69, 45, 61, 43, 54, 37, 52, 44, 61]
                        }
                    ],
                    chart: {
                        height: 350,
                        type: "line",
                        toolbar: {
                            show: false
                        }
                    },
                    stroke: {
                        curve: "smooth"
                    },
                    colors: [
                        "#0f79f3", "#ffb264"
                    ],
                    fill: {
                        type: "solid",
                        opacity: [0.35, 1]
                    },
                    labels: [
                        "Dec 01",
                        "Dec 02",
                        "Dec 03",
                        "Dec 04",
                        "Dec 05",
                        "Dec 06",
                        "Dec 07",
                        "Dec 08",
                        "Dec 09 ",
                        "Dec 10"
                    ],
                    markers: {
                        size: 0
                    },
                    yaxis: [
                        {
                            title: {
                                text: "Series A",
                                style: {
                                    color: "#475569",
                                    fontSize: "14px",
                                    fontWeight: 500
                                }
                            },
                            labels: {
                                style: {
                                    colors: "#919aa3",
                                    fontSize: "14px"
                                }
                            },
                            axisBorder: {
                                show: false
                            }
                        },
                        {
                            opposite: true,
                            title: {
                                text: "Series B",
                                style: {
                                    color: "#475569",
                                    fontSize: "14px",
                                    fontWeight: 500
                                }
                            },
                            labels: {
                                style: {
                                    colors: "#919aa3",
                                    fontSize: "14px"
                                }
                            },
                            axisBorder: {
                                show: false
                            }
                        }
                    ],
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
                    tooltip: {
                        shared: true,
                        intersect: false,
                        y: {
                            formatter: function(y:any) {
                                if (typeof y !== "undefined") {
                                    return y.toFixed(0) + " points";
                                }
                                return y;
                            }
                        }
                    },
                    legend: {
                        horizontalAlign: "center",
                        position: "bottom",
                        fontSize: "14px",
                        offsetY: 5,
                        labels: {
                            colors: "#919aa3"
                        },
                        itemMargin: {
                            horizontal: 10,
                            vertical: 5
                        }
                    },
                    grid: {
                        show: true,
                        strokeDashArray: 5,
                        borderColor: "#e0e0e0"
                    }
                };

                // Initialize and render the chart
                const chart = new ApexCharts(document.querySelector('#line_area_chart'), options);
                chart.render();
            } catch (error) {
                console.error('Error loading ApexCharts:', error);
            }
        }
    }

}