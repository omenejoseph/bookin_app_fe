<script>
    //Importing Bubble class from the vue-chartjs wrapper
    import { Line } from 'vue-chartjs'
    //Exporting this so it can be used in other components
    export default {
        name: "LineChart",
        extends: Line,
        data: () => ({
            chartdata: {
                labels: ['January', 'February'],
                datasets: [
                    {
                        label: 'Bookings Over the last two months',
                        backgroundColor: '#f87979',
                        data: [40, 20]
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false
            }
        }),
        mounted () {
            //renderChart function renders the chart with the datacollection and options object.
            this.renderChart(this.chartdata, this.options)
        }
    }
</script>