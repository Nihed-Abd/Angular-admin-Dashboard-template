import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
    providedIn: 'root'
})
export class LineColumnAreaChartService {

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
                            type: "column",
                            data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30]
                        },
                        {
                            name: "Team B",
                            type: "area",
                            data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43]
                        },
                        {
                            name: "Team C",
                            type: "line",
                            data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39]
                        }
                    ],
                    chart: {
                        height: 350,
                        type: "line",
                        stacked: false,
                        toolbar: {
                            show: false
                        }
                    },
                    colors: [
                        "#0f79f3", "#00cae3", "#e74c3c"
                    ],
                    stroke: {
                        width: [0, 2, 5],
                        curve: "smooth"
                    },
                    plotOptions: {
                        bar: {
                            columnWidth: "50%"
                        }
                    },
                    fill: {
                        opacity: [0.85, 0.25, 1],
                        gradient: {
                            inverseColors: false,
                            shade: "light",
                            type: "vertical",
                            opacityFrom: 0.85,
                            opacityTo: 0.55,
                            // stops: [0, 100, 100, 100]
                        }
                    },
                    labels: [
                        "01/01/2024",
                        "02/01/2024",
                        "03/01/2024",
                        "04/01/2024",
                        "05/01/2024",
                        "06/01/2024",
                        "07/01/2024",
                        "08/01/2024",
                        "09/01/2024",
                        "10/01/2024",
                        "11/01/2024"
                    ],
                    markers: {
                        size: 0
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
                        title: {
                            text: "Points",
                            style: {
                                color: "#475569",
                                fontSize: "14px",
                                fontWeight: 500
                            }
                        },
                        min: 0,
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
                        horizontalAlign: "left",
                        position: "top",
                        fontSize: "14px",
                        offsetY: 0,
                        labels: {
                            colors: "#919aa3"
                        },
                        itemMargin: {
                            horizontal: 10,
                            vertical: 0
                        }
                    },
                    grid: {
                        show: true,
                        strokeDashArray: 5,
                        borderColor: "#e0e0e0"
                    }
                };

                // Initialize and render the chart
                const chart = new ApexCharts(document.querySelector('#line_column_area_chart'), options);
                chart.render();
            } catch (error) {
                console.error('Error loading ApexCharts:', error);
            }
        }
    }

}