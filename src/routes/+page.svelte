<script lang="ts">
	import { formic } from '$lib/formic'
	const { form, values } = formic()
</script>

<form use:form>
	<input type="text" name="address" />
	<input type="text" name="identity" />
	<input type="submit" value="go" />
</form>
