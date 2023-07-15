/*
 * Copyright (C) 2016-2023 phantombot.github.io/PhantomBot
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

$.lang.register('cmd.404', 'команда !$1 не існує або не зареєстрована.');
$.lang.register('cmd.adminonly', 'Тільки Адміністратор маєдоступ до цієї команди!');
$.lang.register('cmd.casteronly', 'Тільки Стрімер має доступ до цієї команди!');
$.lang.register('cmd.modonly', 'Тільки Модератор має доступ до цієї команди!');
$.lang.register('cmd.useronly', 'Тільки $1 має доступ до цієї команди!');
$.lang.register('cmd.needpoints', 'Ця команда коштує $1, чого ви не маєте.');
$.lang.register('cmd.perm.404', 'У вас немає доступу до цієї команди. Тільки $1 або вище мають доступ.');
$.lang.register('commandlist.commands', 'Команди (ст. $1 з $2): $3');
$.lang.register('commandlist.more', ' >> Напишіть "!commands $1" для дод.');
$.lang.register('commandlist.nocommands', 'Наразі немає доступних для вас команд');
$.lang.register('commandlist.nopage', 'сторінка $1 не існує!');
$.lang.register('commandlist.progress', 'Експортування команд... $1%');
$.lang.register('common.disabled', 'вимкнено');
$.lang.register('common.enabled', 'увімкнено');
$.lang.register('common.user-error', 'Ви маєте вказати користувача, щоб застосувати на ньому цю команду');
$.lang.register('common.user.404', 'Користувач "$1" ще не завітав на цей канал.');
$.lang.register('common.game.change', 'Змінено категорю стріму на: $1');
$.lang.register('common.communities.change', 'Communities have been updated!');
$.lang.register('common.title.change', 'Змінено назву стріму на: $1');
$.lang.register('common.twitch.no.status', 'not sure, neither is Twitch');
$.lang.register('common.twitch.no.game', 'not sure, neither is Twitch');
$.lang.register('console.received.clearchat', 'Received a clear chat notification from jtv');
$.lang.register('console.received.irsprivmsg', 'Received a PM from $1: $2');
$.lang.register('console.received.purgetimeoutban', 'Received a purge/timeout/ban notification on user $1 from jtv');
$.lang.register('console.received.r9k.end', 'Received an end r9k mode notification from jtv');
$.lang.register('console.received.r9k.start', 'Received a start r9k mode notification from jtv');
$.lang.register('console.received.slowmode.end', 'Received an end slow mode notification from jtv');
$.lang.register('console.received.slowmode.start', 'Received a start slow mode ($1) notification from jtv');
$.lang.register('console.received.subscriberonly.end', 'Received an end subscribers-only mode notification from jtv');
$.lang.register('console.received.subscriberonly.start', 'Received a start subscribers-only mode notification from jtv');
$.lang.register('init.cmsgset', 'Connected message set!');
$.lang.register('init.module.404', 'Цей модуль не існує або не підключений!');
$.lang.register('init.module.check.disabled', 'Модуль $1 наразі вимкнений!');
$.lang.register('init.module.check.enabled', 'Модуль $1 наразі увімкнений!');
$.lang.register('init.module.auto-disabled', 'Модулі пов\'язані з системою очок були вимкнені.');
$.lang.register('init.module.disabled', 'Модуль "$1" вимкнено!');
$.lang.register('init.module.enabled', 'Модуль "$1" увімкнено!');
$.lang.register('init.module.error', 'Модуль "$1" увімкнений, але не запустився! Перевірте звіт про помилки!');
$.lang.register('init.module.list', 'Модулів: $1');
$.lang.register('init.module.list.total', 'Всього сторінок: $1');
$.lang.register('init.module.usage', 'Викор.: !module [list / enabled / delete / status / reload]');
$.lang.register('init.module.usage.disable', 'Викор.: !module disable [module path]');
$.lang.register('init.module.usage.status', 'Викор.: !module status [module path]');
$.lang.register('init.module.usage.enable', 'Викор.: !module enable [module path]');
$.lang.register('init.module.delete.usage', 'Викор.: !module delete [module_name] - Видаляє запис з БД! Викор. для модулів, що видалено з диску!');
$.lang.register('init.module.delete.success', 'Модуль видалено з БД: $1');
$.lang.register('init.module.delete.404', 'Модуль не знайдено в БД: $1');
$.lang.register('init.module.reload.usage', 'Викор.: !module reload [all / module path] - Примусово перезавантажує всі або один модуль!');
$.lang.register('init.module.reload.all', 'Всі модулі перезавантажено!');
$.lang.register('init.module.reload', 'Модуль $1 перезавантажено!');
$.lang.register('init.module.reload.404', 'Модуль не знайдено в БД: $1');
$.lang.register('init.reconnect', 'Перепідключення до TMI і PubSub...');
$.lang.register('init.disconnect', 'Вимкнення...');
$.lang.register('init.usage', '!$1 [reconnect / disconnect]');
$.lang.register('init.forceonline', 'Forcing status to online');
$.lang.register('init.forceoffline', 'Forcing status to offline');
$.lang.register('init.connected.msg', 'Connect message set to: $1');
$.lang.register('init.connected.msg.usage', '!$1 connectmessage [message]');
$.lang.register('init.connected.msg.removed', 'Connect message removed!');
$.lang.register('init.blacklist.usage', 'Usage: !$1 blacklist [add / remove]');
$.lang.register('init.blacklist.add.usage', 'Usage: !$1 blacklist add (username)');
$.lang.register('init.blacklist.added', 'added $1 to the bot blacklist!');
$.lang.register('init.blacklist.remove.usage', 'Usage: !$1 blacklist remove (username)');
$.lang.register('init.blacklist.err', 'that user is not in the blacklist.');
$.lang.register('init.blacklist.removed', 'removed $1 from the bot blacklist!');
$.lang.register('init.mod.toggle.on.pay', 'moderators+ will now pay for commands.');
$.lang.register('init.mod.toggle.off.pay', 'moderators+ will no longer pay for commands.');
$.lang.register('init.mod.toggle.perm.msg.off', 'No permission messages have been disabled.');
$.lang.register('init.mod.toggle.perm.msg.on', 'No permission messages have been enabled.');
$.lang.register('init.mod.toggle.price.msg.off', 'The price message has been disabled.');
$.lang.register('init.mod.toggle.price.msg.on', 'The price message has been enabled.');
$.lang.register('init.toggle.cooldown.msg.on', 'The cooldown message has been enabled.');
$.lang.register('init.toggle.cooldown.msg.off', 'The cooldown message has been disabled.');
$.lang.register('init.toggle.customCommandAt.on', 'Enabled targeting no-tag custom commands using !mycommand @user');
$.lang.register('init.toggle.customCommandAt.off', 'Disabled targeting no-tag custom commands using !mycommand @user');
$.lang.register('init.cooldown.msg.global', 'command !$1 is still on a global cooldown. ($2 seconds left)');
$.lang.register('init.cooldown.msg.user', 'command !$1 is still on cooldown for you. ($2 seconds left)');
$.lang.register('whisper.whispers.disabled', '[Whisper Mode] has been disabled.');
$.lang.register('whisper.whispers.enabled', '[Whisper Mode] has been enabled.');
$.lang.register('common.hours', ' годин, ');
$.lang.register('common.hours2', ' годин, ');
$.lang.register('common.hours3', ' годин');
$.lang.register('common.minutes', ' хвилин і ');
$.lang.register('common.minutes2', ' хвилин.');
$.lang.register('common.seconds', ' секунд');
$.lang.register('common.get.age.days', '$1 $2 зареєстрований на Twitch з $3. (Приєднався $4 днів тому)');
$.lang.register('common.get.age', '$1 $2 зареєстрований на Twitch з $3.');
$.lang.register('channel.age.user.404', 'Цього користувача не існує на Twitch.');
$.lang.register('main.donation.last.tip.message', 'Останній донат від: $1 ($2 $3)');
$.lang.register('common.time.month', 'month');
$.lang.register('common.time.months', 'months');
$.lang.register('common.time.day', 'день');
$.lang.register('common.time.days', 'днів');
$.lang.register('common.time.hour', 'година');
$.lang.register('common.time.hours', 'годин');
$.lang.register('common.time.minute', 'хвилина');
$.lang.register('common.time.minutes', 'хвилин');
$.lang.register('common.time.second', 'секунда');
$.lang.register('common.time.seconds', 'секунд');
$.lang.register('common.time.and', ', і ');
$.lang.register('common.time.nostart', 'looks like that has not started');
$.lang.register('common.time.expired', 'looks like that has expired');
