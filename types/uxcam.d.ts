import Vue from "vue";

interface UxcQueue {
	__t: any[];
	__ak: string;
	__o: any;
	event(n: string, p?: Record<string, any>): void;
	setUserIdentity(id: string): void;
	setUserProperty(k: string, v: any): void;
	setUserProperties(p: Record<string, any>): void;
}

declare module "vue/types/vue" {
	interface Vue {
		$uxc: UxcQueue;
	}
}

declare module "@nuxt/types" {
	interface Context {
		$uxc: UxcQueue;
	}
	interface NuxtAppOptions {
		$uxc: UxcQueue;
	}
}
