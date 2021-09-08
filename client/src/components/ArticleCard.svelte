<script>
  import { navigate } from "svelte-routing";

  export let props;

  function viewArticle() {
    navigate(`/article/${props._id}`);
  }
</script>

<section>
  <h1>{props.title}</h1>
  <em>{new Date(props.date).toLocaleString(undefined)}</em>
  <p>{props.text}</p>

  <button on:click={() => viewArticle()}>Read</button>
</section>

<style>
  section {
    border-radius: 10px;
    padding: 20px;
    margin: 10px;

    width: 330px;
    height: 330px;

    overflow: hidden;

    box-shadow: 0 2px 24px rgba(0, 0, 0, 0.3);
  }

  h1 {
    font-size: 2rem;
    letter-spacing: 0;
    margin-top: 0.5em;
  }

  p {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
</style>
