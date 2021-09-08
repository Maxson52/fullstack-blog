<script>
  import { get } from "svelte/store";
  import { navigate } from "svelte-routing";
  import { articles, updateArticles } from "../fetch";

  export let id;

  let isEditing = false;

  let article = get(articles).find((x) => x._id === id);

  function editArticle() {
    isEditing = true;
  }

  async function saveArticle() {
    await updateArticles.put(id, article.title, article.text);
    isEditing = false;
  }

  async function deleteArticle() {
    await updateArticles.delete(id);
    await updateArticles.refresh();

    navigate("/");
  }
</script>

<section>
  <h1>{article.title}</h1>
  <em>{new Date(article.date).toLocaleString(undefined)}</em>

  {#if isEditing}
    <textarea type="text" placeholder="Text" bind:value={article.text} />
  {:else}
    <p>{article.text}</p>
  {/if}

  <button on:click={() => navigate("/")}>Back</button>
  {#if isEditing}
    <button on:click={() => saveArticle()}>Save</button>
  {:else}
    <button on:click={() => editArticle()}>Edit</button>
  {/if}
  <button class="delete" on:click={() => deleteArticle()}>Delete</button>
</section>

<style>
  p {
    white-space: pre-line;
  }
  textarea {
    width: 100%;
    height: 60vh;
  }
  .delete {
    background-color: #ff0000;
  }
</style>
