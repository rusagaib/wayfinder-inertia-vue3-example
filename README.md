## wayfinder-inertia-vue3-example 

a very stupidly simple application to test run a new laravel wayfinder types definition importer, to integrating with your Laravel12 + inertia + vue3 setup replacing previous [tightenco/ziggy](https://github.com/tighten/ziggy)

## Environment i used:

- php8.3 
- node 20.9.0

## Instalation:

```sh
composer install
npm install
```

## Run (with hot-reload):

1. run laravel backend:

```sh
php artisan serve
```
2. run the vite-frontend instance using seperate terminal console:

```sh
npm run dev
```

### *Optonal* Build the assets so you just only run 'php artisan serve' (but no hot reload):  

build frontend assets:

```sh
npm run build
```
then after build finish just run:

```sh
php artisan serve
```
without needed seperate terminal console for run `npm run dev` for vite-frontend intance

## Notes

[ 2025-04-07 12:49 ] - laravel wayfinder still on beta stages so i recomended to stick with [tightenco/ziggy](https://github.com/tighten/ziggy) for building laravel12 + inertia + vue3.
this project example purpose just for preview how easy it's to use new package from [laravel/wayfinder](https://github.com/laravel/wayfinder) to integrate with your inertia and vue3 setup for laravel12 project
and 

**I NOT recomended using this example to use on production!!** 

until there was future stable release from official [laravel/wayfinder](https://github.com/laravel/wayfinder) so stay tune and make more awesome stuff.. 
