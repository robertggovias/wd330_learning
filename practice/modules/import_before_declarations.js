import { filmes } from "./export_before_declaration";

filmes.forEach(element => {
    document.body.prepend(element);
});