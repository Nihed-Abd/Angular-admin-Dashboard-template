import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
    providedIn: 'root'
})
export class DashedLineChartService {

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
                            name: "Session Duration",
                            data: [45, 52, 38, 24, 33, 26, 21, 20, 6, 8, 15, 10]
                        },
                        {
                            name: "Page Views",
                            data: [35, 41, 62, 42, 13, 18, 29, 37, 36, 51, 32, 35]
                        },
                        {
                            name: "Total Visits",
                            data: [87, 57, 74, 99, 75, 38, 62, 47, 82, 56, 45, 47]
                        }
                    ],
                    chart: {
                        height: 350,
                        type: "line",
                        toolbar: {
                            show: true
                        }
                    },
                    colors: [
                        "#796df6", "#00cae3", "#0f79f3"
                    ],
                    dataLabels: {
                        enabled: false
                    },
                    stroke: {
                        width: 5,
                        curve: "straight",
                        dashArray: [0, 8, 5]
                    },
                    title: {
                        text: "Page Statistics",
                        align: "left",
                        offsetX: -9,
                        style: {
                            fontWeight: '500',
                            fontSize: '15px',
                            color: '#475569'
                        }
                    },
                    legend: {
                        show: true,
                        fontSize: '14px',
                        labels: {
                            colors: "#919aa3"
                        },
                        itemMargin: {
                            horizontal: 10,
                            vertical: 0
                        },
                        tooltipHoverFormatter: function(val:any, opts:any) {
                            return (
                                val +
                                " - <strong>" +
                                opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] +
                                "</strong>"
                            );
                        }
                    },
                    markers: {
                        size: 0,
                        hover: {
                            sizeOffset: 6
                        }
                    },
                    xaxis: {
                        axisBorder: {
                            show: false,
                            color: '#e0e0e0'
                        },
                        axisTicks: {
                            show: false,
                            color: '#e0e0e0'
                        },
                        labels: {
                            show: true,
                            style: {
                                colors: "#919aa3",
                                fontSize: "14px"
                            }
                        },
                        categories: [
                            "01 Jan",
                            "02 Jan",
                            "03 Jan",
                            "04 Jan",
                            "05 Jan",
                            "06 Jan",
                            "07 Jan",
                            "08 Jan",
                            "09 Jan",
                            "10 Jan",
                            "11 Jan",
                            "12 Jan"
                        ]
                    },
                    tooltip: {
                        y: [
                            {
                                title: {
                                    formatter: function(val:any) {
                                        return val + " (mins)";
                                    }
                                }
                            },
                            {
                                title: {
                                    formatter: function(val:any) {
                                        return val + " per session";
                                    }
                                }
                            },
                            {
                                title: {
                                    formatter: function(val:any) {
                                        return val;
                                    }
                                }
                            }
                        ]
                    },
                    grid: {
                        show: true,
                        strokeDashArray: 5,
                        borderColor: "#e0e0e0"
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
                const chart = new ApexCharts(document.querySelector('#dashed_line_chart'), options);
                chart.render();
            } catch (error) {
                console.error('Error loading ApexCharts:', error);
            }
        }
    }

}