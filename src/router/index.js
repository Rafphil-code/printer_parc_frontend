import {createRouter, createWebHistory} from 'vue-router'
import Printers from '../view/printers.vue'
import Alerts from '../view/Alerts.vue'
import Stocks from '../view/Stocks.vue'
import Settings from '../view/Settings.vue'
import Profil from '../view/Profil.vue'
import MainLayout from '../layouts/MainLayout.vue'
import Dashboard from '../view/Dashboard.vue'
import PrinterUsage from '../view/PrinterUsage.vue'

const routes = [
    {
        path : '/',
        component : MainLayout,
        children : [
        {path : '/dashboard', component : Dashboard},
        {path : '/printers', component : Printers},
        {path : '/alerts', component : Alerts},
        {path : '/stock', component : Stocks},
        {path : '/settings', component : Settings},
        {path : '/reports', component : PrinterUsage},
        {path : '/profil', component : Profil},
        ] 
    }
]

const router = createRouter({
    history:createWebHistory(),
    routes
})

export default router