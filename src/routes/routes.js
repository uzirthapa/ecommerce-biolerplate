const routes = [
    {
        path: "/",
        name: "home",
        component: () => import("@/Base/pages/BaseHomePage.vue")
    },
    {
        path: "/profile",
        name: "profile",
        component: () => import("@/modules/Profile/pages/ProfilePage.vue"),
        meta: { requiresAuth: true },
        children: [
            { path: 'account', name: 'account', component: () => import('@/modules/Profile/pages/ProfileAccountPage.vue') },
            { path: 'purchase-history', name: 'purchase-history', component: () => import('@/modules/Profile/pages/ProfilePurchaseHistoryPage.vue') },
            { path: 'wish-list', name: 'wish-list', component: () => import('@/modules/Profile/pages/ProfileWishListPage.vue') },
        ]
    },
    {
        path: "/auth",
        name: "auth",
        component: () => import("@/modules/Auth/pages/AuthPage.vue")
    },
    {
        path: "/products",
        name: "products",
        component: () => import("@/modules/Products/pages/ProductListPage.vue")

    },
    {
        path: '/products/:id',
        name: 'product',
        component: () => import("@/modules/Products/pages/ProductPage.vue")
    },
    {
        path: "/categories",
        name: "categories",
        component: () => import("@/modules/Products/pages/ProductCategoryListPage.vue")

    },
    {
        path: "/categories/:id",
        name: "category",
        component: () => import("@/modules/Products/pages/ProductCategoryPage.vue")

    },
    {
        path: '/cart',
        name: 'cart',
        component: () => import("@/modules/Cart/pages/CartPage.vue")
    },
    {
        path: '/payment',
        name: 'payment',
        meta: { requiresAuth: true },
        component: () => import("@/modules/Payment/pages/PaymentPage.vue")
    },
    {
        path: '/confirm-payment/:id',
        name: 'payment-confirmation',
        meta: { requiresAuth: false },
        component: () => import("@/modules/Payment/pages/PaymentConfirmationPage.vue")
    }

]

export default routes