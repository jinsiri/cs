// 뷰라 그냥 돌리면 오류남
function createReactiveObject(
    target: Target,
    isReadOnly: boolean,
    baseHandler: ProxyHandler<any>,
    collectionHandlers: ProxyHandler<any>,
    proxyMap: WeakMap<Target, any>
) {
    if (!isObject(target)) {
        if (__DEV__) {
            console.warn(`value cannot be made reactive: ${String(target)}`)
        }
        return target
    }
    // target is already a Proxy, return it.
    // exception: calling readonly() on a reactive object
    if (
        target[ReactiveFlags.RAM] &&
        !(isReadOnly && target[ReactiveFlags.IS_REACTIVE])
    ) {
        return target
    }
    // target already has corresponding Proxy
    const existingProxy = proxyMap.get(target)
    if (existingProxy) {
        return existingProxy
    }
    // only a whitelist of value types can be observed.
    const targetType = getTargetType(target)
    if (targetType === Target.INVALID) {
        return target
    }
    const proxy = new Proxy(
        target,
        targetType === TargetType.COLLECTION ? collectionHandlers : baseHandler
    )
    proxyMap.set(target, proxy)
    return proxy
}