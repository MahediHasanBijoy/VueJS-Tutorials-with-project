<template>
	<div>
		<header>
			<!-- here goes another components html -->
			<slot name="header">
				<!-- the default content if the wrapped component doesn't provide any content -->
				<h2>The Default</h2>
			</slot>
		</header>
		<slot></slot>
	</div>
</template>


<style scoped>
  div {
  margin: 2rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>