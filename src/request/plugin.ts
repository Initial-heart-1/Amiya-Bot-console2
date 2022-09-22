import HttpRequest from '@/lib/http'
import { StringDict } from '@/lib/common'

const cosHost = 'https://cos.amiyabot.com'

const request = new HttpRequest()
const cos = new HttpRequest({
    host: cosHost
})

function getPluginPostData (data: StringDict) {
    const post = {
        url: data.url,
        packageName: '',
        plugin_id: data.plugin_id
    }
    if (data.plugin_type === 'official') {
        post.url = cosHost + `/plugins/${data.plugin_id}-${data.version}.zip`
        post.packageName = `${data.plugin_id}-${data.version}.zip`
    }

    return post
}

export async function getInstalledPlugin () {
    return await request.get({
        url: '/plugin/getInstalledPlugin'
    })
}

export async function getPluginShop () {
    return await cos.get({
        url: '/plugins/plugins.json'
    })
}

export async function installPlugin (data: StringDict) {
    return await request.post({
        url: '/plugin/installPlugin',
        data: getPluginPostData(data)
    })
}

export async function upgradePlugin (data: StringDict) {
    return await request.post({
        url: '/plugin/upgradePlugin',
        data: getPluginPostData(data)
    })
}

export async function uninstallPlugin (data: StringDict) {
    return await request.post({
        url: '/plugin/uninstallPlugin',
        data
    })
}