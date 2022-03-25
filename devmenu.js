const getProps = (obj) =>
	Object.entries(obj).find(entry => entry[0]?.startsWith('__reactProps'))?.[1]?.children?.props;

/** @param {NS} ns **/
export async function main(ns) {

	Array.from(eval("document")
	.querySelectorAll("[class*=MuiBox-root]"))
	.map(box => getProps(box))
	.find(x => x?.player)
	?.router
	.toDevMenu();
 }