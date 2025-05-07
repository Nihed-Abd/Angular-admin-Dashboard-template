import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
    providedIn: 'root'
})
export class BasicRadarChartService {

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
                            name: "Daxa",
                            data: [80, 50, 30, 40, 100, 20]
                        }
                    ],
                    chart: {
                        height: 350,
                        type: "radar",
                        toolbar: {
                            show: true
                        }
                    },
                    title: {
                        text: "Basic Radar Chart",
                        align: "left",
                        offsetX: -9,
                        style: {
                            fontWeight: '500',
                            fontSize: '15px',
                            color: '#475569'
                        }
                    },
                    xaxis: {
                        categories: ["January", "February", "March", "April", "May", "June"]
                    },
                    colors: ["#0f79f3"]
                };

                // Initialize and render the chart
                const chart = new ApexCharts(document.querySelector('#basic_radar_chart'), options);
                chart.render();
            } catch (error) {
                console.error('Error loading ApexCharts:', error);
            }
        }
    }

}