export default (_ctx, _inject) => {
	if (process.server) return;

	const id = "nevronix-sdk";
	if (!document.getElementById(id)) {
		const s = document.createElement("script");
		s.id = id;
		s.src = "https://nevronix.ai/nevronix-sdk.js";
		s.defer = true;
		s.onload = () => {
			const api = window.NevronixAI;
			if (api && typeof api.init === "function") {
				api.init({
					apiUrl: "https://platform.nevronix.ai?id=47&s=01cb7098-142b-4133-a174-80e224b10ede&doNotInteruptAvatar=false&showMessagesOnMobile=true&alwaysDisableMic=true",
					position: "bottom-right",
					iframeWidth: "340px",
					iframeHeight: "340px",
					iframeMobileWidth: "300px",
					iframeMobileHeight: "300px",
					buttonText: "Hi! Click here to start a conversation",
				});
			}
		};
		document.head.appendChild(s);
	}
};
