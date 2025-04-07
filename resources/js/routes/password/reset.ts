import { queryParams, type QueryParams } from './../../wayfinder'

/**
 * @see \App\Http\Controllers\Auth\NewPasswordController::reset
 * @see app/Http/Controllers/Auth/NewPasswordController.php:22
 * @route /reset-password/{token}
 */
export const reset = (args: { token: string | number } | [token: string | number] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: reset.url(args, options),
    method: 'get',
})

reset.definition = {
    methods: ['get','head'],
    url: '\/reset-password\/{token}',
}

/**
 * @see \App\Http\Controllers\Auth\NewPasswordController::reset
 * @see app/Http/Controllers/Auth/NewPasswordController.php:22
 * @route /reset-password/{token}
 */
reset.url = (args: { token: string | number } | [token: string | number] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { token: args }
    }

    if (Array.isArray(args)) {
        args = {
            token: args[0],
        }
    }

    const parsedArgs = {
        token: args.token,
    }

    return reset.definition.url
            .replace('{token}', parsedArgs.token.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
 * @see \App\Http\Controllers\Auth\NewPasswordController::reset
 * @see app/Http/Controllers/Auth/NewPasswordController.php:22
 * @route /reset-password/{token}
 */
reset.get = (args: { token: string | number } | [token: string | number] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: reset.url(args, options),
    method: 'get',
})

/**
 * @see \App\Http\Controllers\Auth\NewPasswordController::reset
 * @see app/Http/Controllers/Auth/NewPasswordController.php:22
 * @route /reset-password/{token}
 */
reset.head = (args: { token: string | number } | [token: string | number] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: reset.url(args, options),
    method: 'head',
})

export default reset