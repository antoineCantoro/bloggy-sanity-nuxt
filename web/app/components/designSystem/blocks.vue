<script setup lang="ts">
import GalleryBlock from '~/components/blocks/Gallery.vue'
import QuoteBlock from '~/components/blocks/Quote.vue'
import DividerBlock from '~/components/blocks/Divider.vue'
import EditorialCalloutBlock from '~/components/blocks/EditorialCallout.vue'

// DS related components
import Heading from '~/components/designSystem/heading.vue'

const quoteExample = [
  {
    _type: 'block',
    _key: 'design-system-quote',
    style: 'normal',
    markDefs: [],
    children: [
      {
        _type: 'span',
        _key: 'design-system-quote-text',
        text: '“Good architecture makes the next change easier, not the first version more impressive.”',
        marks: []
      }
    ]
  }
]
</script>

<template>
  <section class="space-y-8 max-w-[744px] mx-auto">
    <div>
      <p class="mb-2 text-sm font-medium text-blue-600">
        03 / Contenu éditorial
      </p>
      <h2 class="text-2xl font-bold sm:text-3xl">
        Blocks
      </h2>
      <p class="mt-2 text-gray-600">
        Blocs de contenu configurables utilisés dans les pages.
      </p>
    </div>
    <div class="grid gap-12">

      <!-- Gallery Block -->
      <article class="border border-gray-300 bg-white p-6">
        <Heading :level="1" text="Gallery" info="GALLERY" />
        <GalleryBlock
          heading="Des idées qui prennent forme"
          tagline="Un bloc éditorial avec un titre et un texte d’introduction."
        />
      </article>

      <!-- Quote Block -->
      <article class="border-t-1 border-gray-300 pt-6">
        <Heading :level="2" text="Quote" info="QUOTE / ATTRIBUTION" />
        <QuoteBlock
          :quote="quoteExample"
          author="MAYA CHEN"
          role="THE QUIET POWER OF BORING TECHNOLOGY"
        />
      </article>

      <!-- Divider Block -->
      <article class="border-t-1 border-gray-300 pt-6">
        <Heading :level="3" text="Divider" info="DIVIDER" />
        <div class="border border-gray-300 bg-white p-8">
          <p class="text-gray-500">The goal is not fewer tools. It is fewer things to think about.</p>
          <DividerBlock />
          <h3 class="font-semibold text-xl">Make the next change easier</h3>
        </div>
      </article>

      <!-- Editorial Callout Block -->
      <article class="border-t-1 border-gray-300 pt-6 flex flex-col gap-5">
        <Heading :level="4" text="Editorial Callout" info="TIP / WARNING" />
        <EditorialCalloutBlock
          type="info"
          suptitle="TIP"
          title="Spend your complexity budget wisely."
          text="Choose familiar tools for familiar problems. Save the new technology for the part of your product that is genuinely different."
          icon="lightbulb"
        />
        <EditorialCalloutBlock
          type="warning"
          suptitle="WARNING"
          title="Make the rollback plan first."
          text="A dependency upgrade can change production behavior. Test against real workloads and keep a known-good release within reach."
          icon="triangle-alert"

        />
      </article>
    </div>
    <p class="text-sm text-gray-500">
      Autres blocs disponibles : TextContent, Video et Hero.
    </p>
  </section>
</template>
