const formatDollar = value => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value);

const formatDecimal = value => value.toFixed(2);

export default {
    formatDecimal,
    formatDollar
}