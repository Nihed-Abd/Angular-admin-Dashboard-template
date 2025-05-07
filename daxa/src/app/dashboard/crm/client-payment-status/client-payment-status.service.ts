import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
    providedIn: 'root'
})
export class ClientPaymentStatusService {

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
                    series: [35, 25, 15],
                    chart: {
                        height: 246,
                        type: "polarArea"
                    },
                    stroke: {
                        width: 0,
                        colors: ["#ffffff"]
                    },
                    plotOptions: {
                        polarArea: {
                            rings: {
                                strokeWidth: 1,
                                strokeColor: '#e0e0e0',
                            },
                            spokes: {
                                strokeWidth: 1,
                                connectorColors: '#e0e0e0',
                            }
                        }
                    },
                    colors: [
                        "#0f79f3", "#00cae3", "#ffb264"
                    ],
                    fill: {
                        opacity: 1
                    },
                    grid: {
                        strokeDashArray: 5,
                        borderColor: "#e0e0e0"
                    },
                    legend: {
                        offsetY: 0,
                        floating: true,
                        fontSize: "14px",
                        position: "top",
                        horizontalAlign: "left",
                        labels: {
                            colors: "#919aa3",
                        },
                        itemMargin: {
                            horizontal: 0,
                            vertical: 0
                        }
                    },
                    labels: [
                        "Paid", "Pending", "Overdue"
                    ],
                    tooltip: {
                        y: {
                            formatter: function(val:any) {
                                return val + "%";
                            }
                        }
                    }
                };

                // Initialize and render the chart
                const chart = new ApexCharts(document.querySelector('#crm_client_payment_status_chart'), options);
                chart.render();
            } catch (error) {
                console.error('Error loading ApexCharts:', error);
            }
        }
    }

}