<script>
  import { updateArticles } from "../fetch";

  let title = "";
  let text = "";

  async function newPost() {
    await updateArticles.post(title, text);
    await updateArticles.refresh();

    title = "";
    text = "";
  }
</script>

<div>
  <input type="text" placeholder="Title" bind:value={title} />
  <textarea type="text" placeholder="Text" bind:value={text} />
  <button on:click={() => newPost()}>Post</button>
</div>

<style>
  div {
    border-radius: 10px;
    padding: 20px;
    margin: 10px;

    width: 330px;
    height: 330px;

    box-shadow: 0 2px 24px rgba(0, 0, 0, 0.3);

    display: flex;
    flex-direction: column;
    justify-content: center;
  }
</style>
