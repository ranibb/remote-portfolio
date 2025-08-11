<!-- src/components/PortfolioSummary.vue in the REMOTE app -->
<template>
  <div class="portfolio-summary">
    <h3>Portfolio Snapshot (Remote App)</h3>
    <p>Total Value: <strong>$1,250,345.67</strong></p>
    <p>Owned Assets: <strong>12</strong></p>
    <small>This entire component is being served live from a separate application!</small>
  </div>
</template>

<style scoped>
.portfolio-summary {
  border: 2px dashed #42b883;
  padding: 1.5rem;
  border-radius: 8px;
}
h3 {
  margin-top: 0;
}
small {
  color: #555;
}
</style>