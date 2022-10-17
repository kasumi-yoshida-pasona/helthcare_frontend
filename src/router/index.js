
import Login from "@/views/Login/index.vue"
import Garden from "@/views/Garden/index.vue"
import Listen from "@/views/Listen/index.vue"
import Read from "@/views/Read/index.vue"
import Record from "@/views/Record/index.vue"
import Relation from "@/views/Relation/index.vue"

export const routes = [
  {
    path: "/",
    name: "Garden",
    component: Garden,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/listen",
    name: "Listen",
    component: Listen,
  },
  {
    path: "/read",
    name: "Read",
    component: Read,
  },
  {
    path: "/record",
    name: "Record",
    component: Record,
  },
  {
    path: "/relation",
    name: "Relation",
    component: Relation,
  },
]
