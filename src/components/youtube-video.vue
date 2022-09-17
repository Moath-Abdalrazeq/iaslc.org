<!-- <template>
  <div class="py-5">
    <button @click="videoClick">
      <div
        class="h-[28rem] w-[34rem] bg-cover bg-red-600 p-6"
        :style="{ 'background-image': `url(${popupImg})` }"
      >
        <div class="flex h-full w-full">
          <img :src="youtubeImg" class="m-auto w-20 hover:opacity-80" />
        </div>
      </div>
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import popupImg from "../assets/popup.png";
import youtubeImg from "../assets/YouTube.jpg";
export default defineComponent({
  emits: ["onVideoClick"],
  setup(props, { emit }) {
    function videoClick() {
      emit("onVideoClick");
    }
    return { youtubeImg, popupImg, videoClick };
  },
});
</script> -->
