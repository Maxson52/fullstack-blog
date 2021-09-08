<script>
  import { onMount } from "svelte";

  import "../../node_modules/axist/dist/axist.min.css";

  import { articles, updateArticles } from "../fetch";

  import Article from "../components/ArticleCard.svelte";
  import Form from "../components/Form.svelte";

  onMount(() => {
    updateArticles.refresh();
  });
</script>

<section>
  <Form />

  {#each $articles as article}
    <Article props={article} />
  {/each}
</section>

<style>
  section {
    display: flex;
    flex-wrap: wrap;
  }
</style>
