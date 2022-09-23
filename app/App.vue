<template>
  <Page>
    <FlexboxLayout
      alignItems="center"
      justifyContent="flex-start"
      flexDirection="column"
    >
      <Button @tap="count++" text="Tap Me!" />
      <Label :text="count"></Label>

      <TextField v-model="textField" width="100%"></TextField>
      <Label :text="textField"></Label>
    </FlexboxLayout>
  </Page>
</template>

<script setup>
import { ref } from 'vue';

const count = ref(1);
const textField = ref('');
</script>

<style>
Button {
  background: #65adf1;
  color: white;
  width: 100%;
}
Button,
Label {
  font-size: 22;
}
</style>
