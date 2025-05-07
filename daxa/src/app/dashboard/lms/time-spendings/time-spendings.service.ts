import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
    providedIn: 'root'
})
export class TimeSpendingsService {

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
                    series: [65, 55, 45, 35, 25, 15, 5],
                    chart: {
                        type: "donut",
                        height: 245
                    },
                    labels: [
                        "Team A", "Team B", "Team C", "Team D", "Team E", "Team F", "Team G"
                    ],
                    dataLabels: {
                        enabled: false,
                        style: {
                            fontSize: '14px'
                        },
                        dropShadow: {
                            enabled: false
                        }
                    },
                    colors: [
                        "#796df6", "#8d83f7", "#a199f9", "#b5affa", "#c9c5fb", "#dddbfd", "#f2f0fe"
                    ],
                    stroke: {
                        width: 1
                    },
                    legend: {
                        offsetY: 0,
                        show: false,
                        fontSize: "14px",
                        position: "bottom",
                        horizontalAlign: "center",
                        labels: {
                            colors: "#919aa3",
                        },
                        itemMargin: {
                            horizontal: 12,
                            vertical: 7
                        }
                    },
                    tooltip: {
                        y: {
                            formatter: function(val:any) {
                                return val + " hrs";
                            }
                        }
                    }
                };

                // Initialize and render the chart
                const chart = new ApexCharts(document.querySelector('#lms_time_spendings_chart'), options);
                chart.render();
            } catch (error) {
                console.error('Error loading ApexCharts:', error);
            }
        }
    }

}