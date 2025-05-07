import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
    providedIn: 'root'
})
export class SteplineLineChartService {

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
                            name: "Stepline Series",
                            data: [34, 44, 54, 21, 12, 43, 33, 23, 66, 66, 58]
                        }
                    ],
                    chart: {
                        type: "line",
                        height: 350
                    },
                    stroke: {
                        curve: "stepline"
                    },
                    colors: [
                        "#0f79f3"
                    ],
                    dataLabels: {
                        enabled: false
                    },
                    title: {
                        text: "Stepline Chart",
                        align: "left",
                        offsetX: -9,
                        style: {
                            fontWeight: '500',
                            fontSize: '15px',
                            color: '#475569'
                        }
                    },
                    markers: {
                        hover: {
                            sizeOffset: 4
                        }
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
                    },
                    grid: {
                        show: true,
                        strokeDashArray: 5,
                        borderColor: "#e0e0e0"
                    }
                };

                // Initialize and render the chart
                const chart = new ApexCharts(document.querySelector('#stepline_line_chart'), options);
                chart.render();
            } catch (error) {
                console.error('Error loading ApexCharts:', error);
            }
        }
    }

}