// import { StackContext, Api, EventBus } from "sst/constructs";

// export function API({ stack }: StackContext) {
//   const bus = new EventBus(stack, "bus", {
//     defaults: {
//       retries: 10,
//     },
//   });

//   const api = new Api(stack, "api", {
//     defaults: {
//       function: {f
//         bind: [bus],
//       },
//     },
//     routes: {
//       "GET /": "packages/functions/src/lambda.handler",
//       "GET /todo": "packages/functions/src/todo.list",
//       "POST /todo": "packages/functions/src/todo.create",
//     },
//   });

//   bus.subscribe("todo.created", {
//     handler: "packages/functions/src/events/todo-created.handler",
//   });

//   stack.addOutputs({
//     ApiEndpoint: api.url,
//   });
// }
import { StackContext, NextjsSite } from "sst/constructs";

export function MyStack({ stack }: StackContext) {

  const site = new NextjsSite(stack, "NextJsSite", {
    path: "web",
    // customDomain: "www.yourdomain.com",
  });

  stack.addOutputs({
    SiteUrl: site.url,
  });
}