<template>
  <div class="about">
    <section class="header-container">
      <div class="picture">
        <PictureContainerItem></PictureContainerItem>
      </div>
      <div class="presentation">
        <TitleItem :primary-title="title"></TitleItem>
        <SubTitleItem :secondary-title="secondaryTitle"></SubTitleItem>
        <section class="badges-container">
          <div class="technical">
            <CategorySubtitleItem
              :title-category="titleSkills.technical"
            ></CategorySubtitleItem>
            <section class="technical-skills">
              <BadgeItem
                v-for="competence in devlopementCompetences"
                :key="competence.skill"
                :name="competence.skill"
              ></BadgeItem>
            </section>
          </div>
          <div class="frameworks">
            <CategorySubtitleItem
              :title-category="titleSkills.frameworks"
            ></CategorySubtitleItem>
            <section class="technical-skills">
              <BadgeItem
                v-for="framework in skillsFramework"
                :key="framework.name"
                :name="framework.name"
              ></BadgeItem>
            </section>
          </div>
          <div class="tools">
            <CategorySubtitleItem
              :title-category="titleSkills.methodology"
            ></CategorySubtitleItem>
            <section class="technical-skills">
              <BadgeItem
                v-for="tool in skillsTools"
                :key="tool.name"
                :name="tool.name"
              ></BadgeItem>
            </section>
          </div>
        </section>
      </div>
    </section>
    <section class="body-container">
      <div id="about-me">
        <SubTitleItem :secondary-title="titleFirstParagraph"></SubTitleItem>
        <p class="paragraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          malesuada eget enim ut consectetur. Nullam rutrum lacinia aliquam.
          Mauris nunc velit, tristique sed ante eu, bibendum tincidunt lectus.
          Quisque faucibus id orci eget fringilla. Vivamus feugiat, sapien
          pretium aliquet dictum, sapien erat dapibus risus, nec sagittis mauris
          felis eget orci. Nulla malesuada orci sed nisl mattis, in varius justo
          interdum. Curabitur vel ullamcorper mauris, a molestie leo. Sed
          euismod, eros vitae malesuada viverra, risus neque condimentum augue,
          in cursus est velit eu nunc. Nam tempus odio ac auctor interdum.
          Nullam fermentum dolor in ante dapibus ultrices. Sed pretium viverra
          interdum. Ut ultricies turpis arcu, vitae lacinia nisi vestibulum id.
          Nullam fermentum tincidunt libero sed auctor. Vivamus sem purus,
          elementum sed maximus nec, porta tincidunt enim. Nam orci erat,
          tincidunt et lorem sit amet, eleifend sollicitudin ipsum. Suspendisse
          id ultrices erat, quis faucibus urna. Curabitur a justo vehicula,
          dignissim urna vel, malesuada metus. Mauris at ante commodo, dignissim
          arcu nec, malesuada lacus. Nam viverra lacus at erat fermentum, at
          rhoncus nisi mollis. Maecenas bibendum hendrerit lacus ac cursus.
          Aliquam eleifend orci in finibus euismod.
        </p>
      </div>
      <div id="passion">
        <SubTitleItem :secondary-title="titleFirstParagraph"></SubTitleItem>
        <p class="paragraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          malesuada eget enim ut consectetur. Nullam rutrum lacinia aliquam.
          Mauris nunc velit, tristique sed ante eu, bibendum tincidunt lectus.
          Quisque faucibus id orci eget fringilla. Vivamus feugiat, sapien
          pretium aliquet dictum, sapien erat dapibus risus, nec sagittis mauris
          felis eget orci. Nulla malesuada orci sed nisl mattis, in varius justo
          interdum. Curabitur vel ullamcorper mauris, a molestie leo. Sed
          euismod, eros vitae malesuada viverra, risus neque condimentum augue,
          in cursus est velit eu nunc. Nam tempus odio ac auctor interdum.
          Nullam fermentum dolor in ante dapibus ultrices. Sed pretium viverra
          interdum. Ut ultricies turpis arcu, vitae lacinia nisi vestibulum id.
          Nullam fermentum tincidunt libero sed auctor. Vivamus sem purus,
          elementum sed maximus nec, porta tincidunt enim. Nam orci erat,
          tincidunt et lorem sit amet, eleifend sollicitudin ipsum. Suspendisse
          id ultrices erat, quis faucibus urna. Curabitur a justo vehicula,
          dignissim urna vel, malesuada metus. Mauris at ante commodo, dignissim
          arcu nec, malesuada lacus. Nam viverra lacus at erat fermentum, at
          rhoncus nisi mollis. Maecenas bibendum hendrerit lacus ac cursus.
          Aliquam eleifend orci in finibus euismod.
        </p>
      </div>
    </section>
  </div>
</template>
<script lang="ts">
import PictureContainerItem from "../components/templates/PictureContainerItem.vue";
import TitleItem from "../components/atoms/TitleItem.vue";
import { defineComponent } from "vue";
import SubTitleItem from "../components/atoms/SubTitleItem.vue";
import BadgeItem from "../components/atoms/BadgeItem.vue";
import CategorySubtitleItem from "../components/atoms/CategorySubtitleItem.vue";
export default defineComponent({
  name: "AboutView",
  components: {
    TitleItem,
    PictureContainerItem,
    SubTitleItem,
    BadgeItem,
    CategorySubtitleItem,
  },
  setup() {
    const title = "Axel Menard";
    const secondaryTitle = "Développeur frontend";
    const titleFirstParagraph = "À propos de moi";
    const devlopementCompetences = [
      { skill: "Javascript" },
      { skill: "Typescript" },
      { skill: "GraphQL" },
      { skill: "Node.js" },
      { skill: "PHP" },
      { skill: "CSS" },
      { skill: "HTML" },
      { skill: "mySQL" },
    ];
    const skillsFramework = [
      { name: "NestJS" },
      { name: "Laravel" },
      { name: "Vue.js" },
      { name: "Angular" },
      { name: "Vite" },
    ];
    const skillsTools = [
      { name: "Scrum" },
      { name: "Docker" },
      { name: "Kubernetes" },
      { name: "Jira" },
      { name: "TFS" },
      { name: "Git" },
      { name: "Lodash" },
    ];
    const titleSkills = {
      technical: "Technical skills",
      frameworks: "Frameworks",
      methodology: "Tools",
    };
    return {
      title,
      secondaryTitle,
      titleFirstParagraph,
      devlopementCompetences,
      titleSkills,
      skillsFramework,
      skillsTools,
    };
  },
});
</script>
<style lang="scss">
.about {
  display: flex;
  flex-direction: row;
  margin-top: 3.2rem;
  .header-container {
    display: flex;
    padding: 0rem 1.2rem 1.6rem 1.2rem;

    flex-direction: column;
    .presentation * {
      justify-content: center;
    }

    .technical-skills {
      flex-direction: row;
      flex-wrap: wrap;
      display: flex;
    }
  }
  .body-container {
    padding: 1.6rem 1.2rem 1.6rem 1.2rem;

    .paragraph {
      padding: 1.6rem 1.2rem 1.6rem 1.2rem;
    }
  }
}
</style>
