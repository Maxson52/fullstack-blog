<script>
  import { Router, Route } from "svelte-routing";

  import Home from "./routes/Home.svelte";
  import FullArticle from "./routes/Article.svelte";

  const url = "";
</script>

<Router {url}>
  <div>
    <Route path="article/:id" let:params><FullArticle id={params.id} /></Route>
    <Route path="/" component={Home} />
  </div>
</Router>
