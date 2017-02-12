/**
 * BetterDiscord Channel Object
 * Copyright (c) 2015-present Jiiks - https://jiiks.net
 * All rights reserved.
 * https://github.com/Jiiks/BetterDiscordApp - https://betterdiscord.net
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree. 
*/

class Channel {
    constructor(data) {
        this.id = data.guild_id;
        this.name = data.name;
        this.topic = data.topic;
    }
}

module.exports = Channel;