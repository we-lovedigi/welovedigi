export default (_ctx, inject) => {
	(function (appKey, opts) {
		(window as any).uxc = {
			__t: [],
			__ak: appKey,
			__o: opts,
			event: function (n, p) {
				this.__t.push(["event", n, p]);
			},
			setUserIdentity: function (i) {
				this.__t.push(["setUserIdentity", i]);
			},
			setUserProperty: function (k, v) {
				this.__t.push(["setUserProperty", k, v]);
			},
			setUserProperties: function (p) {
				this.__t.push(["setUserProperties", p]);
			},
		};

		const head = document.getElementsByTagName("head")[0];
		const script = document.createElement("script");
		script.type = "text/javascript";
		script.src = "https://websdk-recording.uxcam.com/index.js"; // use https
		script.async = true;
		script.defer = true;
		script.id = "uxcam-web-sdk";
		script.crossOrigin = "anonymous";
		head.appendChild(script);
	})("u4fo96pwp0xa5zy-eu", {});

	inject("uxc", (window as any).uxc);
};
