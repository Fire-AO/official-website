<script>
  import { Router, Route } from "svelte-routing";
  import NewmainPage from "./pages/newmainPage.svelte";
  import ArchivePage from "./pages/archivePage.svelte";
  import ApplyPage from "./pages/applyPage.svelte";
  import AboutAOPage from "./pages/aboutAoPage.svelte";
  import TeamPage from "./pages/teamPage.svelte";
  import "./App.css";
  import { darkMode } from "./store";
  // import Modal from "./components/completeModal.svelte";

  let showModal = true;

  darkMode.subscribe((isDark) => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  });
</script>

<Router>
  <Route path="/" component={NewmainPage} />
  <Route path="/archive" component={ArchivePage} />
  <Route path="/about" component={AboutAOPage} />
  <Route path="/team" component={TeamPage} />
  <Route path="/apply" component={ApplyPage} />
</Router>
