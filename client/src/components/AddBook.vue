<template>
  <div class="add-book-wrapper">
    <div class="card">
      <div class="card-content">
        <form id="form">
          <div class="field">
            <label for="name" class="label">Name:</label>
            <input type="text" name="name" class="input" />
          </div>
          <div class="field">
            <label for="genre" class="label">Genre:</label>
            <input type="text" name="genre" class="input" />
          </div>
          <div class="field">
            <label for="author" class="label">Author:</label>
            <div class="control">
              <div class="select large">
                <select name="author" class="large">
                  <option></option>
                  <option>With options</option>
                </select>
              </div>
            </div>
          </div>
          <div class="control">
            <button class="button is-primary flo-right margin-1rem" @click.prevent>Submit</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AddBook'
}
</script>

<style lang="scss" scoped>
.add-book-wrapper {
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  text-align: left;
}
.flo-right {
  float: right;
}
.margin-top-1rem {
  margin-top: 1rem;
}
.margin-1rem {
  margin: 1rem 0;
}
.large {
  width: 100%;
}
</style>
