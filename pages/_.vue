<!-- Вместо 404 страницы делаем редирект обратно к списку покупок -->
<script>
export default {
  fetch ({ redirect }) {
    redirect('/')
  }
}
</script>
