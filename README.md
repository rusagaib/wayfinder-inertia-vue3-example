## wayfinder-inertia-vue3-example 

a very stupidly simple application to test run a new laravel wayfinder types definition importer, to integrating with your Laravel12 + inertia + vue3 setup replacing previous [tightenco/ziggy](https://github.com/tighten/ziggy)

## Environment i used:

- php 8.3.19 
- composer 2.7.6
- node 20.9.0
- npm 10.1.0
- [@inertiajs/vue3@2.0.6](https://github.com/inertiajs/inertia/releases/tag/v2.0.6)
- [vite@6.2.5](https://github.com/vitejs/vite/releases/tag/v6.2.5)

## Instalation:

```sh
git clone https://github.com/rusagaib/wayfinder-inertia-vue3-example.git 
cd wayfinder-inertia-vue3-example
# install package ./vendor and ./node_modules
composer install
npm install
# generate laravel APP_KEY on .env
cp .env.example .env
php artisan key:generate
# migrate db (use sqlite) -> output db on ./database/database.sqlite
php artian migrate
```

## Run (with hot-reload):

**1. run laravel backend:**

```sh
php artisan serve
```
**2. run the vite-frontend instance using seperate terminal console then run:**

```sh
npm run dev
```

### *Optonal* - Build the assets so you just only run `php artisan serve` (but no hot reload):  

build frontend assets:

```sh
npm run build
```
then after build finish just run:

```sh
php artisan serve
```
without needed seperate terminal console for run `npm run dev` for vite-frontend intance

## *Adding new controller or routes:

everytime for instances you add new controller or routes on ./routes/web.php etc..

you'll need to generate freshly new type definition .ts for route and action that laravel/wayfinder generate for you to use..

to generate routes or action using laravel/wayfinder run:

```sh
php artisan wayfinder:generate
```

also please notice sometimes if you make some changes on the laravel project, theres posibiliy it's still have old cache/config there so you'll need to make sure clear those cache:

```sh 
# clear old cache/config
php artisan cache:clear
php artisan config:clear
php artisan route:clear

# then after that you generate wayfinder routes and action
php artisan wayfinder:generate
```

**For more info please check out official repo documentation here:**
- [laravel/wayfinder](https://github.com/laravel/wayfinder)

## Notes

[ 2025-04-07 12:49 ] - laravel wayfinder still on beta stages so i recomended to stick with [tightenco/ziggy](https://github.com/tighten/ziggy) for building laravel12 + inertia + vue3.
this project example purpose just for preview how easy it's to use new package from [laravel/wayfinder](https://github.com/laravel/wayfinder) to integrate with your inertia and vue3 setup for laravel12 project
and 

**I NOT recomended using this example to use on production!!** 

until there was future stable release from official [laravel/wayfinder](https://github.com/laravel/wayfinder) so stay tune and make more awesome stuff.. 
