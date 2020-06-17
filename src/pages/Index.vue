<template>
  <Layout>

    <div class="hero container-inner mx-auto flex flex-col sm:flex-row justify-between py-16">
		<div class="text-4xl font-bold w-full text-center sm:text-left">
			<div class="leading-tight">How to build an algo crypto trading bot using <span class="text-green-700">AutoML</span> from Google</div>
		</div>
    </div>

    <div class="container-inner mx-auto">
		<p class="text-lg sm:text-xl">In this article I will explain you how to mine some data about the crypto market using Node.js. I will show you how to create a dataset to build and deploy an AutoML model to predict the price of cryptocurrencies.</p>
		<div class="flex justify-between items-center py-6">
			<div class="w-full sm:w-1/2 px-8 py-8 sm:py-0">
				<g-image src="../../static/mind_map.svg" alt="browser" />
			</div>
			<div class="w-1/2 px-8 hidden sm:flex justify-end">
				<g-image src="../../static/code_review.svg" alt="mobile" />
			</div>
		</div>
    </div>

    <div class="hero container-inner mx-auto flex flex-col sm:flex-row justify-between py-16">
		<div class="w-full text-center sm:text-left">
			<h2 class="text-2xl text-green-700 font-bold mb-6">Why AutoML?</h2>
			<h2 class="text-2xl font-bold mb-6">State-of-the-art performance</h2>
			<p class="text-lg sm:text-xl">"<g-link to="https://cloud.google.com/automl" class="text-green-700 font-bold">AutoML</g-link> leverages more than 10 years of proprietary Google Research technology to help your machine learning models achieve faster performance and more accurate predictions."</p>
		</div>
		<div class="w-full sm:w-1/2 px-8 py-8 sm:py-0 my-4">
			<g-image src="../../static/state-of-the-art.png" alt="AutoML by Google Cloud"/>
		</div>
    </div>

    <div class="hero container-inner mx-auto flex flex-col sm:flex-row justify-between py-16">
		<div class="w-full text-center sm:text-left">
            <h2 class="text-2xl text-green-700 font-bold mb-6">Why Node.js?</h2>
			<h2 class="text-2xl font-bold mb-6">Node.js is faster than Python</h2>
			<p class="text-lg sm:text-xl">Node.js is based on the powerful Chrome’s V8 engine that makes it one of the fastest server-side solutions around. Plus Node.js is easy to monitor, deploy and support.</p>
		</div>
    </div>

    <div class="overflow-x-hidden">
        <div class="projects container-inner mx-auto text-xl border-t border-gray-500 border-b py-16 relative">
            <h2 class="font-bold mb-6">This article includes:</h2>
            <div class="absolute right-0" style="top: 50px; transform: translate(100%) rotate(180deg)">
                <svg width="170px" height="170px"><use xlink:href="#dots-triangle" /></svg>
            </div>
            <ul class="text-lg sm:text-xl">
                <li class="checkmark mb-6">
                    <div>Data Mining</div>
                    <div class="text-lg text-gray-600"></div>
                </li>
                <li class="checkmark mb-6">
                    <div>Dataset Creation</div>
                    <div class="text-lg text-gray-600"></div>
                </li>
                <li class="checkmark mb-6">
                    <div>AutoML Model Creation</div>
                    <div class="text-lg text-gray-600"></div>
                </li>
                <li class="checkmark mb-6">
                    <div>AutoML Model Testing</div>
                    <div class="text-lg text-gray-600"></div>
                </li>
            </ul>
        </div>
    </div>

    <div class="projects container-inner mx-auto text-xl border-gray-500 border-b py-16 mb-16 relative">
        <div class="text-4xl font-bold w-full text-center sm:text-left mb-5">
            <div class="leading-tight">Crypto Data Mining</div>
        </div>
        <div class="w-full text-center sm:text-left mt-5">
			<p class="text-lg sm:text-xl">Bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla.</p>
		</div>
    </div>

    <div class="overflow-x-hidden border-gray-200 border-b">
      <div class="get-to-know-me container-inner mx-auto text-xl pb-16 relative">
        <h2 class="font-bold mb-6" id="about">Get to know me:</h2>
        <div class="absolute left-0" style="top: 50px; transform: translateX(-100%)">
          <svg width="170px" height="170px"><use xlink:href="#dots-triangle" /></svg>
        </div>
        <div class="flex flex-col sm:flex-row justify-between items-center mb-16">
          <div><g-image src="../../static/avatar.jpg" alt="avatar" class="w-32 h-32 rounded-full mb-8 lg:mb-0" /></div>
          <div class="flex-1 text-lg sm:text-xl ml-6">My name is Hervé Fulchiron. I am a remote senior software engineer passionated with algo trading. I have more than 25 years of coding experience. I created several big solutions including ecommerce, social, fintech and decentralized platforms.</div>
        </div>
      </div>
    </div>

  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Home'
  }
}
</script>

