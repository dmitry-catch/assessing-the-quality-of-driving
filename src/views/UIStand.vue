<script setup>
import Input from '@/ui/Input.vue'
import Button from '@/ui/Button.vue'
import Surface from '@/ui/Surface.vue'
import { ref } from 'vue'

const textField = ref(null)
</script>

<template>
  <h1 style="text-decoration: underline; margin: 24px 0">
    This is the test stand of all custom UI components:
  </h1>
  <div class="Content">
    <div class="Section">
      <div class="Buttons">
        <div class="Item">button: <Button> Click me! </Button></div>
        <div class="Item">
          button more content: <Button> Click me! Click me! Click me! Click me! Click me! </Button>
        </div>
      </div>
      <div class="Inputs">
        <div class="Item">
          default input:
          <Input v-model="textField" placeholder="placeholder"> Some label here </Input>
        </div>
        <div class="Item">
          required input:
          <Input v-model="textField" placeholder="placeholder" :required="true">
            Some label here
          </Input>
        </div>
        <div class="Item">
          invalid input:
          <Input v-model="textField" placeholder="placeholder" :invalid="true">
            Some label here
          </Input>
        </div>
        <div class="Item">
          invalid input <br />
          with error desc:
          <Input
            v-model="textField"
            placeholder="placeholder"
            :invalid="true"
            error="Wrong password!"
            :required="true"
          >
            Some label here
          </Input>
        </div>
      </div>
    </div>
    <div class="Section">
      surface:
      <div class="SurfaceWrapper">
        <Surface>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed at repellendus reiciendis
          impedit officiis odit optio porro minima? Velit, asperiores debitis. Totam nulla nam,
          debitis id hic nisi
        </Surface>
      </div>
      custom scroll:
      <div class="SurfaceWrapper">
        <Surface style="height: 200px; overflow: scroll">
          exercitationem obcaecati iusto consequatur et nobis cumque saepe, officiis laborum optio
          laudantium ex atque quisquam recusandae sunt. Animi adipisci nihil libero ad? Animi
          adipisci nihil libero ad? Animi adipisci nihil libero ad? Animi adipisci nihil libero ad?
          Animi adipisci nihil libero ad? Animi adipisci nihil libero ad? Animi adipisci nihil
          libero ad? Animi adipisci nihil libero ad? Animi adipisci nihil libero ad? Animi adipisci
          nihil libero ad? Animi adipisci nihil libero ad? Animi adipisci nihil libero ad? Animi
          adipisci nihil libero ad? Animi adipisci nihil libero ad? Animi adipisci nihil libero ad?
          Animi adipisci nihil libero ad? Animi adipisci nihil libero ad? Animi adipisci nihil
          libero ad? Animi adipisci nihil libero ad? Animi adipisci nihil libero
        </Surface>
      </div>

      <div class="Headers">
        headers:
        <h1>Lorem ipsum dolor sit amet.</h1>
        <h2>Lorem ipsum dolor sit amet.</h2>
        <h3>Lorem ipsum dolor sit amet.</h3>
        <h4>Lorem ipsum dolor sit amet.</h4>
        <h5>Lorem ipsum dolor sit amet.</h5>
        <h6>Lorem ipsum dolor sit amet.</h6>
      </div>
    </div>
  </div>
</template>

<style>
.Headers * {
  margin: 16px 0;
}

.Inputs,
.Buttons,
.Section {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.Inputs {
  width: 400px;
}

.Inputs .Item {
  display: flex;
  justify-content: space-between;
}

.Content {
  display: flex;
  gap: 32px;
}

.SurfaceWrapper {
  width: 472px;
}
</style>
