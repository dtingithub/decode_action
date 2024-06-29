//Sat Jun 29 2024 03:20:23 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const _0xddf4db = "滴滴果园",
  _0x80a76e = new _0x512345(_0xddf4db);
let _0x33efe8 = ["\n", "@"],
  _0x948144,
  _0xffe3b8 = (_0x80a76e.isNode() ? process.env.ddgyToken : _0x80a76e.getdata("ddgyToken")) || "",
  _0x3f7f83 = (_0x80a76e.isNode() ? process.env.ddgyNotify : _0x80a76e.getdata("ddgyNotify")) || 1,
  _0x521853 = [],
  _0x2a5b11 = 0,
  _0x2cf62d = 0,
  _0x34640a = ["3pLgMJ5", "k57MWrY"],
  _0x22d297 = [],
  _0x56f2eb = 5,
  _0x54e730 = 1.04,
  _0x5a7ca1 = 0,
  _0x232331 = "ddgy",
  _0x1a23b8 = "https://leafxcy.coding.net/api/user/leafxcy/project/validcode/shared-depot/validCode/git/blob/master/code.json",
  _0x1b7cf2 = "https://127.0.0.1/";
class _0x32f43b {
  constructor(_0x2ed436) {
    this.index = ++_0x2a5b11;
    let _0x4b3676 = _0x2ed436.split("&");
    this.token = decodeURIComponent(decodeURIComponent(_0x4b3676[1]));
    this.valid = false;
    this.canWater = true;
    this.sharecode = "";
    this.shareNum = 0;
  }
  async getUserInfo(_0x39e0c2, _0x42c671) {
    try {
      let _0x22f3a9 = "",
        _0x5f44a5 = "";
      if (_0x42c671) {
        _0x22f3a9 = 101;
        if (this.index == 1) {
          if (_0x22d297.length > 0) {
            let _0x35dbcf = Math.floor(Math.random() * _0x22d297.length);
            _0x5f44a5 = _0x22d297[_0x35dbcf];
            console.log("账号[" + this.index + "]去助力作者...");
          }
        } else {
          for (let _0x309e9f of _0x521853) {
            if (_0x309e9f.index != this.index) {
              if (_0x309e9f.shareNum < 4) {
                _0x5f44a5 = _0x309e9f.sharecode;
                _0x309e9f.shareNum++;
                console.log("账号[" + this.index + "]去助力账号[" + _0x309e9f.index + "]...");
                break;
              }
            }
          }
          if (!_0x5f44a5 && _0x22d297.length > 0) {
            let _0x2e8f10 = Math.floor(Math.random() * _0x22d297.length);
            _0x5f44a5 = _0x22d297[_0x2e8f10];
            console.log("前面账号助力已满，账号[" + this.index + "]去助力作者...");
          }
        }
      }
      let _0x32b3e2 = "https://game.xiaojukeji.com/api/game/plant/newEnter";
      let _0x230d30 = "{\"xbiz\":\"\",\"prod_key\":\"didi-orchard\",\"xpsid\":\"\",\"dchn\":\"\",\"xoid\":\"\",\"uid\":\"\",\"xenv\":\"\",\"xspm_from\":\"\",\"xpsid_root\":\"\",\"xpsid_from\":\"\",\"xpsid_share\":\"\",\"assist_type\":101,\"encode_uid\":\"" + _0x5f44a5 + "\",\"is_old_player\":true,\"platform\":1,\"token\":\"" + this.token + "\"}",
        _0x3761bf = _0x84fb9d(_0x32b3e2, _0x230d30);
      await _0xa22e67("post", _0x3761bf);
      let _0x3b01d8 = _0x948144;
      if (!_0x3b01d8) {
        return;
      }
      if (_0x3b01d8.errno == 0) {
        this.uid = _0x3b01d8.data.uid || "";
        this.box = _0x3b01d8.data.tree_info.available_box || 0;
        this.fer = _0x3b01d8.data.tree_info.pack_fer || 0;
        this.water = _0x3b01d8.data.tree_info.pack_water || 0;
        this.progress = _0x3b01d8.data.tree_info.tree_progress || 0;
        this.nutrient = _0x3b01d8.data.tree_info.tree_nutrient || 0;
        this.dogFer = _0x3b01d8.data.dog.fertilizer || 0;
        this.worm = _0x3b01d8.data.worm_num || 0;
        this.extWaterTime = _0x3b01d8.data.tree_info.ext_water_rec_time || 0;
        this.assist_status = _0x3b01d8.data.assist_status || "";
        this.tree_id = _0x3b01d8.data.tree_info.tree_id || 0;
        this.product = "";
        for (let _0x4234ac of _0x3b01d8.data.trees_cfg) {
          if (_0x4234ac.tree_id == this.tree_id) {
            this.product = _0x4234ac.name;
            break;
          }
        }
        if (this.assist_status) {
          console.log(this.assist_status);
        }
        if (_0x39e0c2) {
          console.log(this.product + " " + this.progress + "%，肥力" + this.nutrient + "，剩余肥料" + this.fer + "，剩余水滴" + this.water);
        }
        this.valid = true;
      } else {
        _0x3f7f83 = 1;
        _0x80a76e.logAndNotify("账号[" + this.index + "]CK失效: " + _0x3b01d8.errmsg);
      }
    } catch (_0x203aea) {
      console.log(_0x203aea);
    } finally {
      return Promise.resolve(1);
    }
  }
  async getShareCode() {
    try {
      let _0x55f556 = "https://game.xiaojukeji.com/api/game/fission/pageInit",
        _0x4e190c = "{\"xbiz\":\"\",\"prod_key\":\"didi-orchard\",\"xpsid\":\"\",\"dchn\":\"\",\"xoid\":\"\",\"uid\":\"\",\"xenv\":\"wxmp\",\"xspm_from\":\"\",\"xpsid_root\":\"\",\"xpsid_from\":\"\",\"xpsid_share\":\"\",\"scene\":2,\"dsi\":\"\",\"platform\":1,\"token\":\"" + this.token + "\"}",
        _0x5ee1de = _0x84fb9d(_0x55f556, _0x4e190c);
      await _0xa22e67("post", _0x5ee1de);
      let _0x351432 = _0x948144;
      if (!_0x351432) {
        return;
      }
      if (_0x351432.errno == 0) {
        this.sharecode = _0x351432.data.share.instance.dsi || "";
        if (this.sharecode) {
          console.log("互助码：" + this.sharecode);
        }
      } else {
        console.log("查询果树状态失败: " + _0x351432.errmsg);
      }
    } catch (_0x54a0c7) {
      console.log(_0x54a0c7);
    } finally {
      return Promise.resolve(1);
    }
  }
  async getTask(_0x7f6261) {
    try {
      let _0x43d487 = "https://game.xiaojukeji.com/api/game/mission/get?xbiz=&prod_key=didi-orchard&xpsid=&dchn=" + _0x7f6261 + "&xoid=&uid=&xenv=wxmp&xspm_from=&xpsid_root=&xpsid_from=&xpsid_share=&game_id=23&loop=0&platform=1&token=" + this.token,
        _0x528cf9 = "",
        _0x3e55c5 = _0x84fb9d(_0x43d487, _0x528cf9);
      await _0xa22e67("get", _0x3e55c5);
      let _0x2979ce = _0x948144;
      if (!_0x2979ce) {
        return;
      }
      if (_0x2979ce.errno == 0) {
        for (let _0x5c3235 of _0x2979ce.data.missions) {
          if (_0x5c3235.status == 3) {
            console.log("\n" + _0x5c3235.title + " -- 已完成");
          } else {
            if (_0x5c3235.status == 2) {
              console.log("\n" + _0x5c3235.title + " -- 可领取奖励");
              await _0x80a76e.wait(100);
              await this.awardMission(_0x5c3235);
            } else {
              console.log("\n" + _0x5c3235.title + " -- 未完成");
              await _0x80a76e.wait(100);
              await this.updateMission(_0x5c3235);
              await _0x80a76e.wait(100);
              await this.awardMission(_0x5c3235);
            }
          }
        }
      } else {
        console.log("查询状态失败: " + _0x2979ce.errmsg);
      }
    } catch (_0xbdad0a) {
      console.log(_0xbdad0a);
    } finally {
      return Promise.resolve(1);
    }
  }
  async acceptMission(_0xe2d43d) {
    try {
      let _0x230521 = "https://game.xiaojukeji.com/api/game/mission/accept",
        _0x33313a = "{\"xbiz\":\"\",\"prod_key\":\"didi-orchard\",\"xpsid\":\"\",\"dchn\":\"\",\"xoid\":\"\",\"uid\":\"\",\"xenv\":\"\",\"xspm_from\":\"\",\"xpsid_root\":\"\",\"xpsid_from\":\"\",\"xpsid_share\":\"\",\"mission_id\":" + _0xe2d43d.id + ",\"game_id\":23,\"platform\":1,\"token\":\"" + this.token + "\"}",
        _0x4b7c30 = _0x84fb9d(_0x230521, _0x33313a);
      await _0xa22e67("post", _0x4b7c30);
      let _0x40ec9f = _0x948144;
      if (!_0x40ec9f) {
        return;
      }
      _0x40ec9f.errno == 0 ? console.log("接受任务") : console.log("接受任务失败: " + _0x40ec9f.errmsg);
    } catch (_0x4c07dc) {
      console.log(_0x4c07dc);
    } finally {
      return Promise.resolve(1);
    }
  }
  async updateMission(_0x41f60b) {
    try {
      let _0x304541 = "https://game.xiaojukeji.com/api/game/mission/update",
        _0x5ec42c = "{\"xbiz\":\"\",\"prod_key\":\"didi-orchard\",\"xpsid\":\"\",\"dchn\":\"\",\"xoid\":\"\",\"uid\":\"\",\"xenv\":\"\",\"xspm_from\":\"\",\"xpsid_root\":\"\",\"xpsid_from\":\"\",\"xpsid_share\":\"\",\"mission_id\":" + _0x41f60b.id + ",\"game_id\":23,\"platform\":1,\"token\":\"" + this.token + "\"}",
        _0x4e7683 = _0x84fb9d(_0x304541, _0x5ec42c);
      await _0xa22e67("post", _0x4e7683);
      let _0x3d640b = _0x948144;
      if (!_0x3d640b) {
        return;
      }
      _0x3d640b.errno == 0 ? console.log("开始任务") : console.log("开始任务失败: " + _0x3d640b.errmsg);
    } catch (_0x547854) {
      console.log(_0x547854);
    } finally {
      return Promise.resolve(1);
    }
  }
  async awardMission(_0x4fdec0) {
    try {
      let _0x52b3ab = "https://game.xiaojukeji.com/api/game/mission/award",
        _0x2c4f9c = "{\"xbiz\":\"\",\"prod_key\":\"didi-orchard\",\"xpsid\":\"\",\"dchn\":\"\",\"xoid\":\"\",\"uid\":\"\",\"xenv\":\"\",\"xspm_from\":\"\",\"xpsid_root\":\"\",\"xpsid_from\":\"\",\"xpsid_share\":\"\",\"mission_id\":" + _0x4fdec0.id + ",\"game_id\":23,\"platform\":1,\"token\":\"" + this.token + "\"}",
        _0x4089da = _0x84fb9d(_0x52b3ab, _0x2c4f9c);
      await _0xa22e67("post", _0x4089da);
      let _0x26022f = _0x948144;
      if (!_0x26022f) {
        return;
      }
      if (_0x26022f.errno == 0) {
        for (let _0x50bd94 of _0x26022f.data.reward) {
          console.log("领取任务奖励：" + _0x50bd94.count + _0x50bd94.name);
        }
      } else {
        console.log("领取任务奖励失败: " + _0x26022f.errmsg);
      }
    } catch (_0x1a8c00) {
      console.log(_0x1a8c00);
    } finally {
      return Promise.resolve(1);
    }
  }
  async recCommonBox() {
    try {
      let _0x5b3595 = "https://game.xiaojukeji.com/api/game/plant/recCommonBox",
        _0x14c59f = "{\"xbiz\":\"\",\"prod_key\":\"didi-orchard\",\"xpsid\":\"\",\"dchn\":\"\",\"xoid\":\"\",\"uid\":\"\",\"xenv\":\"\",\"xspm_from\":\"\",\"xpsid_root\":\"\",\"xpsid_from\":\"\",\"xpsid_share\":\"\",\"platform\":1,\"token\":\"" + this.token + "\"}",
        _0x33918a = _0x84fb9d(_0x5b3595, _0x14c59f);
      await _0xa22e67("post", _0x33918a);
      let _0x24f1b8 = _0x948144;
      if (!_0x24f1b8) {
        return;
      }
      if (_0x24f1b8.errno == 0) {
        for (let _0x1e12c4 of _0x24f1b8.data.rewards) {
          console.log("开宝箱获得：" + _0x1e12c4.num + _0x1e12c4.name);
        }
      } else {
        console.log("开宝箱失败: " + _0x24f1b8.errmsg);
      }
    } catch (_0x4ea17d) {
      console.log(_0x4ea17d);
    } finally {
      return Promise.resolve(1);
    }
  }
  async openBox() {
    try {
      if (this.box == 0) {
        console.log("没有可打开的宝箱");
        return;
      }
      for (let _0x31efcd = 0; _0x31efcd < this.box; _0x31efcd++) {
        await this.recCommonBox();
        await _0x80a76e.wait(200);
      }
    } catch (_0x2fc4d0) {
      console.log(_0x2fc4d0);
    } finally {
      return Promise.resolve(1);
    }
  }
  async watering(_0x4176ce) {
    try {
      let _0x113e0b = "https://game.xiaojukeji.com/api/game/plant/newWatering";
      let _0x304667 = "{\"xbiz\":\"\",\"prod_key\":\"didi-orchard\",\"xpsid\":\"\",\"dchn\":\"\",\"xoid\":\"\",\"uid\":\"\",\"xenv\":\"\",\"xspm_from\":\"\",\"xpsid_root\":\"\",\"xpsid_from\":\"\",\"xpsid_share\":\"\",\"is_fast\":true,\"water_status\":" + _0x4176ce + ",\"platform\":1,\"token\":\"" + this.token + "\"}",
        _0x56c12d = _0x84fb9d(_0x113e0b, _0x304667);
      await _0xa22e67("post", _0x56c12d);
      let _0x16b1d5 = _0x948144;
      if (!_0x16b1d5) {
        return;
      }
      _0x16b1d5.errno == 0 ? (this.water = _0x16b1d5.data.pack_water, this.box = _0x16b1d5.data.available_box, console.log("浇水成功，剩余水滴：" + _0x16b1d5.data.pack_water)) : (console.log("浇水失败: " + _0x16b1d5.errmsg), this.canWater = false);
    } catch (_0x534d30) {
      console.log(_0x534d30);
    } finally {
      return Promise.resolve(1);
    }
  }
  async doWatering() {
    try {
      if (this.water < 10) {
        console.log("水滴不足，暂不浇水");
        return;
      }
      while (this.water >= 10 && this.canWater) {
        await _0x80a76e.wait(200);
        if (this.water > 1000) {
          await this.watering(2);
        } else {
          this.water > 100 ? await this.watering(1) : await this.watering(0);
        }
      }
    } catch (_0x526212) {
      console.log(_0x526212);
    } finally {
      return Promise.resolve(1);
    }
  }
  async fertilizer() {
    try {
      let _0x42e195 = "https://game.xiaojukeji.com/api/game/plant/newFertilizer";
      let _0x4eaccd = "{\"xbiz\":\"\",\"prod_key\":\"didi-orchard\",\"xpsid\":\"\",\"dchn\":\"\",\"xoid\":\"\",\"uid\":\"\",\"xenv\":\"\",\"xspm_from\":\"\",\"xpsid_root\":\"\",\"xpsid_from\":\"\",\"xpsid_share\":\"\",\"count\":1,\"quick\":true,\"platform\":1,\"token\":\"" + this.token + "\"}",
        _0x5a4703 = _0x84fb9d(_0x42e195, _0x4eaccd);
      await _0xa22e67("post", _0x5a4703);
      let _0x44f233 = _0x948144;
      if (!_0x44f233) {
        return;
      }
      _0x44f233.errno == 0 ? (this.fer = _0x44f233.data.pack_fer, console.log("施肥成功，肥力：" + _0x44f233.data.tree_nutrient + "，剩余肥料：" + _0x44f233.data.pack_fer)) : console.log("施肥失败: " + _0x44f233.errmsg);
    } catch (_0x189607) {
      console.log(_0x189607);
    } finally {
      return Promise.resolve(1);
    }
  }
  async doFertilizer() {
    try {
      this.fer > 0 ? this.nutrient < 140 ? (await this.fertilizer(), await _0x80a76e.wait(200)) : console.log("肥力够高，暂不施肥") : console.log("肥料不足，暂不施肥");
    } catch (_0x200300) {
      console.log(_0x200300);
    } finally {
      return Promise.resolve(1);
    }
  }
  async recBucketWater() {
    try {
      let _0x4a5c0a = "https://game.xiaojukeji.com/api/game/plant/recBucketWater",
        _0x1564eb = "{\"xbiz\":\"\",\"prod_key\":\"didi-orchard\",\"xpsid\":\"\",\"dchn\":\"\",\"xoid\":\"\",\"uid\":\"\",\"xenv\":\"\",\"xspm_from\":\"\",\"xpsid_root\":\"\",\"xpsid_from\":\"\",\"xpsid_share\":\"\",\"platform\":1,\"token\":\"" + this.token + "\"}",
        _0x3b01cf = _0x84fb9d(_0x4a5c0a, _0x1564eb);
      await _0xa22e67("post", _0x3b01cf);
      let _0x487958 = _0x948144;
      if (!_0x487958) {
        return;
      }
      _0x487958.errno == 0 ? console.log("收水车获得" + _0x487958.data.rec_water + "水滴") : console.log("收水车失败: " + _0x487958.errmsg);
    } catch (_0x135440) {
      console.log(_0x135440);
    } finally {
      return Promise.resolve(1);
    }
  }
  async recExtWater() {
    try {
      let _0x5e2ec2 = "https://game.xiaojukeji.com/api/game/plant/recExtWater",
        _0x248332 = "{\"xbiz\":\"\",\"prod_key\":\"didi-orchard\",\"xpsid\":\"\",\"dchn\":\"\",\"xoid\":\"\",\"uid\":\"\",\"xenv\":\"\",\"xspm_from\":\"\",\"xpsid_root\":\"\",\"xpsid_from\":\"\",\"xpsid_share\":\"\",\"platform\":1,\"token\":\"" + this.token + "\"}",
        _0x37967c = _0x84fb9d(_0x5e2ec2, _0x248332);
      await _0xa22e67("post", _0x37967c);
      let _0x466343 = _0x948144;
      if (!_0x466343) {
        return;
      }
      _0x466343.errno == 0 ? console.log("收每天水滴奖励获得" + _0x466343.data.rec_water + "水滴") : console.log("收每天水滴奖励失败: " + _0x466343.errmsg);
    } catch (_0x5b066b) {
      console.log(_0x5b066b);
    } finally {
      return Promise.resolve(1);
    }
  }
  async doRecExtWater() {
    try {
      let _0xdc6783 = new Date().getTime();
      _0xdc6783 > parseInt(this.extWaterTime) * 1000 ? (await this.recExtWater(), await _0x80a76e.wait(200)) : console.log("未到领取每日额外水滴时间");
    } catch (_0x3e0cfb) {
      console.log(_0x3e0cfb);
    } finally {
      return Promise.resolve(1);
    }
  }
  async signList() {
    try {
      let _0x4dc8b3 = "https://game.xiaojukeji.com/api/game/plant/signList",
        _0x3e39fc = "{\"xbiz\":\"\",\"prod_key\":\"didi-orchard\",\"xpsid\":\"\",\"dchn\":\"\",\"xoid\":\"\",\"uid\":\"\",\"xenv\":\"\",\"xspm_from\":\"\",\"xpsid_root\":\"\",\"xpsid_from\":\"\",\"xpsid_share\":\"\",\"selected\":10,\"platform\":1,\"token\":\"" + this.token + "\"}",
        _0x15b9a3 = _0x84fb9d(_0x4dc8b3, _0x3e39fc);
      await _0xa22e67("post", _0x15b9a3);
      let _0x31f7f4 = _0x948144;
      if (!_0x31f7f4) {
        return;
      }
      if (_0x31f7f4.errno == 0) {
        let _0x32ea4d = new Date(_0x31f7f4.data.last_sign_time * 1000),
          _0x1feb5a = new Date();
        "" + _0x32ea4d.getMonth() + _0x32ea4d.getDate() != "" + _0x1feb5a.getMonth() + _0x1feb5a.getDate() ? (console.log("今日未签到，准备进行第" + (_0x31f7f4.data.sign_times + 1) + "天签到"), await _0x80a76e.wait(200), await this.doSign()) : console.log("今日已签到，已连续签到" + _0x31f7f4.data.sign_times + "天");
      } else {
        console.log("查询签到信息失败: " + _0x31f7f4.errmsg);
      }
    } catch (_0x249507) {
      console.log(_0x249507);
    } finally {
      return Promise.resolve(1);
    }
  }
  async doSign() {
    try {
      let _0x3656a2 = "https://game.xiaojukeji.com/api/game/plant/sign",
        _0x44e56c = "{\"xbiz\":\"\",\"prod_key\":\"didi-orchard\",\"xpsid\":\"\",\"dchn\":\"\",\"xoid\":\"\",\"uid\":\"\",\"xenv\":\"\",\"xspm_from\":\"\",\"xpsid_root\":\"\",\"xpsid_from\":\"\",\"xpsid_share\":\"\",\"selected\":10,\"platform\":1,\"token\":\"" + this.token + "\"}",
        _0x22b3ec = _0x84fb9d(_0x3656a2, _0x44e56c);
      await _0xa22e67("post", _0x22b3ec);
      let _0x1babde = _0x948144;
      if (!_0x1babde) {
        return;
      }
      if (_0x1babde.errno == 0) {
        for (let _0x2e4cf1 of _0x1babde.data.rewards) {
          console.log("签到获得：" + _0x2e4cf1.num + _0x2e4cf1.name);
        }
      } else {
        console.log("签到失败: " + _0x1babde.errmsg);
      }
    } catch (_0x2b09fd) {
      console.log(_0x2b09fd);
    } finally {
      return Promise.resolve(1);
    }
  }
  async killWorm() {
    try {
      let _0x3f56fc = "https://game.xiaojukeji.com/api/game/plant/killWorm",
        _0x1564d4 = "{\"xbiz\":\"\",\"prod_key\":\"didi-orchard\",\"xpsid\":\"\",\"dchn\":\"\",\"xoid\":\"\",\"uid\":\"\",\"xenv\":\"\",\"xspm_from\":\"\",\"xpsid_root\":\"\",\"xpsid_from\":\"\",\"xpsid_share\":\"\",\"friend_id\":null,\"platform\":1,\"token\":\"" + this.token + "\"}",
        _0x2248ee = _0x84fb9d(_0x3f56fc, _0x1564d4);
      await _0xa22e67("post", _0x2248ee);
      let _0x20ff9e = _0x948144;
      if (!_0x20ff9e) {
        return;
      }
      _0x20ff9e.errno == 0 ? console.log("除蚂蚱成功") : console.log("除蚂蚱失败: " + _0x20ff9e.errmsg);
    } catch (_0x384574) {
      console.log(_0x384574);
    } finally {
      return Promise.resolve(1);
    }
  }
  async doKillWorm() {
    try {
      if (this.worm == 0) {
        console.log("没有蚂蚱需要驱除");
        return;
      }
      for (let _0x5c2b2c = 0; _0x5c2b2c < this.worm; _0x5c2b2c++) {
        await this.killWorm();
        await _0x80a76e.wait(200);
      }
    } catch (_0x3b887b) {
      console.log(_0x3b887b);
    } finally {
      return Promise.resolve(1);
    }
  }
  async cowGoal() {
    try {
      let _0xcd705c = "https://game.xiaojukeji.com/api/game/cow/goal",
        _0x40c07e = "{\"xbiz\":\"\",\"prod_key\":\"didi-orchard\",\"xpsid\":\"\",\"dchn\":\"\",\"xoid\":\"\",\"uid\":\"\",\"xenv\":\"\",\"xspm_from\":\"\",\"xpsid_root\":\"\",\"xpsid_from\":\"\",\"xpsid_share\":\"\",\"platform\":1,\"token\":\"" + this.token + "\"}",
        _0x3d18bd = _0x84fb9d(_0xcd705c, _0x40c07e);
      await _0xa22e67("post", _0x3d18bd);
      let _0x5a6210 = _0x948144;
      if (!_0x5a6210) {
        return;
      }
      _0x5a6210.errno == 0 ? (console.log("吹牛成功，现在有" + _0x5a6210.data.water_wallet.cur + "水滴待领取"), await _0x80a76e.wait(200), await this.cowGoal()) : console.log("吹牛失败: " + _0x5a6210.errmsg);
    } catch (_0x2305eb) {
      console.log(_0x2305eb);
    } finally {
      return Promise.resolve(1);
    }
  }
  async cowAward() {
    try {
      let _0x25c671 = "https://game.xiaojukeji.com/api/game/cow/award",
        _0x5f16b0 = "{\"xbiz\":\"\",\"prod_key\":\"didi-orchard\",\"xpsid\":\"\",\"dchn\":\"\",\"xoid\":\"\",\"uid\":\"\",\"xenv\":\"\",\"xspm_from\":\"\",\"xpsid_root\":\"\",\"xpsid_from\":\"\",\"xpsid_share\":\"\",\"platform\":1,\"token\":\"" + this.token + "\"}",
        _0x2cb895 = _0x84fb9d(_0x25c671, _0x5f16b0);
      await _0xa22e67("post", _0x2cb895);
      let _0x1bb7bb = _0x948144;
      if (!_0x1bb7bb) {
        return;
      }
      _0x1bb7bb.errno == 0 ? console.log("领取吹牛水滴成功") : console.log("领取吹牛水滴失败: " + _0x1bb7bb.errmsg);
    } catch (_0xfcb1b8) {
      console.log(_0xfcb1b8);
    } finally {
      return Promise.resolve(1);
    }
  }
  async cowHall() {
    try {
      let _0x5cdc76 = "https://game.xiaojukeji.com/api/game/cow/hall",
        _0x30dbb2 = "{\"xbiz\":\"\",\"prod_key\":\"didi-orchard\",\"xpsid\":\"\",\"dchn\":\"\",\"xoid\":\"\",\"uid\":\"\",\"xenv\":\"\",\"xspm_from\":\"\",\"xpsid_root\":\"\",\"xpsid_from\":\"\",\"xpsid_share\":\"\",\"platform\":1,\"token\":\"" + this.token + "\"}",
        _0x3919bd = _0x84fb9d(_0x5cdc76, _0x30dbb2);
      await _0xa22e67("post", _0x3919bd);
      let _0x408b9c = _0x948144;
      if (!_0x408b9c) {
        return;
      }
      _0x408b9c.errno == 0 ? _0x408b9c.data.water_wallet.limit == true ? console.log("今天吹牛次数已达到上限") : (await _0x80a76e.wait(200), await this.cowGoal(), await _0x80a76e.wait(200), await this.cowAward()) : console.log("领取吹牛水滴失败: " + _0x408b9c.errmsg);
    } catch (_0x4ef9f0) {
      console.log(_0x4ef9f0);
    } finally {
      return Promise.resolve(1);
    }
  }
  async dogReceivePer() {
    try {
      let _0x53adec = "https://game.xiaojukeji.com/api/game/plant/receivePer",
        _0x2ec0c8 = "{\"xbiz\":\"\",\"prod_key\":\"didi-orchard\",\"xpsid\":\"\",\"dchn\":\"\",\"xoid\":\"\",\"uid\":\"\",\"xenv\":\"\",\"xspm_from\":\"\",\"xpsid_root\":\"\",\"xpsid_from\":\"\",\"xpsid_share\":\"\",\"platform\":1,\"token\":\"" + this.token + "\"}",
        _0xde33ef = _0x84fb9d(_0x53adec, _0x2ec0c8);
      await _0xa22e67("post", _0xde33ef);
      let _0x1251cb = _0x948144;
      if (!_0x1251cb) {
        return;
      }
      _0x1251cb.errno == 0 ? console.log("领取小狗礼物肥料成功") : console.log("领取小狗礼物肥料失败: " + _0x1251cb.errmsg);
    } catch (_0x2d3ebf) {
      console.log(_0x2d3ebf);
    } finally {
      return Promise.resolve(1);
    }
  }
  async receiveDogGift() {
    try {
      if (this.dogFer == 0) {
        console.log("没有可领取的小狗礼物");
        return;
      }
      for (let _0x1e7cc8 = 0; _0x1e7cc8 < this.dogFer; _0x1e7cc8++) {
        await this.dogReceivePer();
        await _0x80a76e.wait(200);
      }
    } catch (_0x15f8d7) {
      console.log(_0x15f8d7);
    } finally {
      return Promise.resolve(1);
    }
  }
  async getBag() {
    try {
      let _0x44cde0 = "https://game.xiaojukeji.com/api/game/plant/getBag",
        _0x3f3630 = "{\"xbiz\":\"\",\"prod_key\":\"didi-orchard\",\"xpsid\":\"\",\"dchn\":\"\",\"xoid\":\"\",\"uid\":\"\",\"xenv\":\"\",\"xspm_from\":\"\",\"xpsid_root\":\"\",\"xpsid_from\":\"\",\"xpsid_share\":\"\",\"platform\":1,\"token\":\"" + this.token + "\"}",
        _0x21d185 = _0x84fb9d(_0x44cde0, _0x3f3630);
      await _0xa22e67("post", _0x21d185);
      let _0x74c4ec = _0x948144;
      if (!_0x74c4ec) {
        return;
      }
      if (_0x74c4ec.errno == 0) {
        let _0x59090c = _0x74c4ec.data.items["1_2001"] || 0;
        console.log("背包里有" + _0x59090c + "个大礼包可使用");
        for (let _0x370b5c = 0; _0x370b5c < _0x59090c; _0x370b5c++) {
          await _0x80a76e.wait(200);
          await this.useItem(2001, 11);
        }
      } else {
        console.log("查询背包信息失败: " + _0x74c4ec.errmsg);
      }
    } catch (_0x1b7cdb) {
      console.log(_0x1b7cdb);
    } finally {
      return Promise.resolve(1);
    }
  }
  async useItem(_0x43cd27, _0xab40bb) {
    try {
      let _0x110a26 = "https://game.xiaojukeji.com/api/game/plant/useItem",
        _0x3337a8 = "{\"xbiz\":\"\",\"prod_key\":\"didi-orchard\",\"xpsid\":\"\",\"dchn\":\"\",\"xoid\":\"\",\"uid\":\"\",\"xenv\":\"\",\"xspm_from\":\"\",\"xpsid_root\":\"\",\"xpsid_from\":\"\",\"xpsid_share\":\"\",\"item_id\":" + _0x43cd27 + ",\"item_type\":" + _0xab40bb + ",\"count\":1,\"platform\":1,\"token\":\"" + this.token + "\"}",
        _0x11f6c3 = _0x84fb9d(_0x110a26, _0x3337a8);
      await _0xa22e67("post", _0x11f6c3);
      let _0x4cc6f7 = _0x948144;
      if (!_0x4cc6f7) {
        return;
      }
      if (_0x4cc6f7.errno == 0) {
        let _0x9a7d1b = ["", "水滴", "肥料"],
          _0x1c6d59 = [];
        for (let _0x2635fd of _0x4cc6f7.data.rewards) {
          let _0x218a16 = "" + _0x2635fd.num + _0x9a7d1b[_0x2635fd.id];
          _0x1c6d59.push(_0x218a16);
        }
        let _0x301dba = _0x1c6d59.join("，");
        console.log("使用道具获得了" + _0x301dba + "，还剩" + _0x4cc6f7.data.Remain + "个道具");
      } else {
        console.log("使用道具失败: " + _0x4cc6f7.errmsg);
      }
    } catch (_0x51abd4) {
      console.log(_0x51abd4);
    } finally {
      return Promise.resolve(1);
    }
  }
  async dailyReward() {
    try {
      let _0x16f224 = "https://game.xiaojukeji.com/api/game/plant/dailyReward",
        _0x42b6cb = "{\"xbiz\":\"\",\"prod_key\":\"didi-orchard\",\"xpsid\":\"\",\"dchn\":\"\",\"xoid\":\"\",\"uid\":\"\",\"xenv\":\"passenger\",\"xspm_from\":\"\",\"xpsid_root\":\"\",\"xpsid_from\":\"\",\"xpsid_share\":\"\",\"platform\":1,\"token\":\"" + this.token + "\"}",
        _0x53971c = _0x84fb9d(_0x16f224, _0x42b6cb);
      await _0xa22e67("post", _0x53971c);
      let _0x108d5e = _0x948144;
      if (!_0x108d5e) {
        return;
      }
      if (_0x108d5e.errno == 0) {
        this.shareNum = _0x108d5e.data.assist_record.length;
        let _0x2138f6 = _0x108d5e.data.rewarded.length;
        console.log("已有" + this.shareNum + "个助力，已领取" + _0x2138f6 + "个奖励");
        for (let _0x5d0843 of _0x108d5e.data.assist_record) {
          let _0x49cd25 = false;
          for (let _0x2927ae of _0x108d5e.data.rewarded) {
            if (_0x2927ae == _0x5d0843.assist_pid) {
              _0x49cd25 = true;
              break;
            }
          }
          !_0x49cd25 && (await _0x80a76e.wait(200), await this.recDailyReward(_0x5d0843.assist_pid));
        }
      } else {
        console.log("获取助力信息失败: " + _0x108d5e.errmsg);
      }
    } catch (_0x4ce5d1) {
      console.log(_0x4ce5d1);
    } finally {
      return Promise.resolve(1);
    }
  }
  async recDailyReward(_0x2d4d27) {
    try {
      let _0x707ceb = "https://game.xiaojukeji.com/api/game/plant/recDailyReward",
        _0x50b574 = "{\"xbiz\":\"\",\"prod_key\":\"didi-orchard\",\"xpsid\":\"\",\"dchn\":\"\",\"xoid\":\"\",\"uid\":\"\",\"xenv\":\"passenger\",\"xspm_from\":\"\",\"xpsid_root\":\"\",\"xpsid_from\":\"\",\"xpsid_share\":\"\",\"assist_pid\":" + _0x2d4d27 + ",\"is_app\":true,\"platform\":1,\"token\":\"" + this.token + "\"}",
        _0xdd93a0 = _0x84fb9d(_0x707ceb, _0x50b574);
      await _0xa22e67("post", _0xdd93a0);
      let _0xb80f16 = _0x948144;
      if (!_0xb80f16) {
        return;
      }
      if (_0xb80f16.errno == 0) {
        for (let _0x2330f8 of _0xb80f16.data.rewards) {
          console.log("领取到助力奖励：" + _0x2330f8.num + _0x2330f8.name);
        }
      } else {
        console.log("领取助力奖励失败: " + _0xb80f16.errmsg);
      }
    } catch (_0x20c4f9) {
      console.log(_0x20c4f9);
    } finally {
      return Promise.resolve(1);
    }
  }
  async userTask() {
    try {
      console.log("\n============= 账号[" + this.index + "] =============");
      await this.getUserInfo(false, true);
      if (!this.valid) {
        return;
      }
      await _0x80a76e.wait(200);
      console.log("\n-------- 获取互助码 --------");
      await this.getShareCode();
      await _0x80a76e.wait(200);
      console.log("\n-------- 互助奖励 --------");
      await this.dailyReward();
      await _0x80a76e.wait(200);
      console.log("\n-------- 签到 --------");
      await this.signList();
      await _0x80a76e.wait(200);
      console.log("\n-------- 大礼包 --------");
      await this.getBag();
      await _0x80a76e.wait(200);
      console.log("\n-------- 除蚂蚱 --------");
      await this.doKillWorm();
      await _0x80a76e.wait(200);
      console.log("\n-------- 小狗礼物 --------");
      await this.receiveDogGift();
      await _0x80a76e.wait(200);
      console.log("\n-------- 吹牛领水滴 --------");
      await this.cowHall();
      await _0x80a76e.wait(200);
      console.log("\n-------- 收水滴 --------");
      await this.doRecExtWater();
      await _0x80a76e.wait(200);
      await this.recBucketWater();
      await _0x80a76e.wait(200);
      console.log("\n-------- 做任务 --------");
      await this.getTask(_0x34640a[1]);
      await _0x80a76e.wait(200);
      console.log("\n-------- 果树信息 --------");
      await this.getUserInfo(true, false);
      await _0x80a76e.wait(200);
      parseFloat(this.progress) == 100 ? (_0x3f7f83 = 1, _0x80a76e.logAndNotify("账号[" + this.index + "]果树已成熟")) : (console.log("\n-------- 施肥 --------"), await this.doFertilizer(), await _0x80a76e.wait(200), console.log("\n-------- 浇水 --------"), await this.doWatering(), await _0x80a76e.wait(200), console.log("\n-------- 开宝箱 --------"), await this.openBox(), await _0x80a76e.wait(200), await this.getUserInfo(false, false), await _0x80a76e.wait(200), console.log("\n-------- 果树进度 --------"), _0x80a76e.logAndNotify("账号[" + this.index + "]果树进度： " + this.product + " " + this.progress + "%"));
    } catch (_0x5ed16b) {
      console.log(_0x5ed16b);
    } finally {
      return Promise.resolve(1);
    }
  }
}
!(async () => {
  if (typeof $request !== "undefined") {
    await _0x15dbaf();
  } else {
    await _0x20fa57();
    if (_0x5a7ca1 == false) {
      return;
    }
    await _0x37bb70();
    if (!(await _0x2cce83())) {
      return;
    }
    for (let _0x46826f of _0x521853) {
      await _0x46826f.userTask();
    }
    _0x3f7f83 > 0 && (await _0x80a76e.showmsg());
  }
})().catch(_0x7313b6 => _0x80a76e.logErr(_0x7313b6)).finally(() => _0x80a76e.done());
async function _0x15dbaf() {
  if ($request.url.indexOf("api/game/plant/enter") > -1) {
    let _0x18932b = JSON.parse($request.body),
      _0x196675 = _0x18932b.uid,
      _0x367ed0 = _0x18932b.token,
      _0x42e99b = _0x196675 + "&" + _0x367ed0;
    if (_0xffe3b8) {
      if (_0xffe3b8.indexOf(_0x196675) == -1) {
        _0xffe3b8 = _0xffe3b8 + "\n" + _0x42e99b;
        _0x80a76e.setdata(_0xffe3b8, "ddgyToken");
        ckList = _0xffe3b8.split("\n");
        _0x80a76e.msg(_0xddf4db + (" 获取第" + ckList.length + "个ck成功: " + _0x42e99b));
      } else {
        let _0x129ee2 = _0xffe3b8.split("\n"),
          _0x11b1e2 = 0;
        for (_0x11b1e2 in _0x129ee2) {
          if (_0x129ee2[_0x11b1e2].indexOf(_0x196675) > -1) {
            _0x129ee2[_0x11b1e2] = _0x42e99b;
            break;
          }
        }
        _0xffe3b8 = _0x129ee2.join("\n");
        _0x80a76e.setdata(_0xffe3b8, "ddgyToken");
        _0x80a76e.msg(_0xddf4db + (" 更新第" + (parseInt(_0x11b1e2) + 1) + "个ck成功: " + _0x42e99b));
      }
    } else {
      _0x80a76e.setdata(_0x42e99b, "ddgyToken");
      _0x80a76e.msg(_0xddf4db + (" 获取第1个ck成功: " + _0x42e99b));
    }
  }
}
async function _0x2cce83() {
  if (_0xffe3b8) {
    let _0x2cddf8 = _0x33efe8[0];
    for (let _0x38b123 of _0x33efe8) {
      if (_0xffe3b8.indexOf(_0x38b123) > -1) {
        _0x2cddf8 = _0x38b123;
        break;
      }
    }
    for (let _0x1d4e24 of _0xffe3b8.split(_0x2cddf8)) {
      if (_0x1d4e24) {
        _0x521853.push(new _0x32f43b(_0x1d4e24));
      }
    }
    _0x2cf62d = _0x521853.length;
  } else {
    console.log("未找到CK");
    return;
  }
  console.log("共找到" + _0x2cf62d + "个账号");
  return true;
}
async function _0x20fa57(_0x5af003 = 0) {
  let _0x10b180 = {
    url: _0x1a23b8
  };
  await _0xa22e67("get", _0x10b180);
  let _0x33e107 = _0x948144;
  if (!_0x33e107) {
    if (_0x5af003 < _0x56f2eb) {
      await _0x20fa57(++_0x5af003);
    }
    return;
  }
  _0x33e107?.["code"] == 0 && (_0x33e107 = JSON.parse(_0x33e107.data.file.data));
  _0x33e107?.["commonNotify"] && _0x33e107.commonNotify.length > 0 && _0x80a76e.logAndNotify(_0x33e107.commonNotify.join("\n") + "\n");
  _0x33e107?.["commonMsg"] && _0x33e107.commonMsg.length > 0 && console.log(_0x33e107.commonMsg.join("\n") + "\n");
  if (_0x33e107[_0x232331]) {
    let _0x5539b3 = _0x33e107[_0x232331];
    if (_0x5539b3.status == 0) {
      if (_0x54e730 >= _0x5539b3.version) {
        _0x5a7ca1 = true;
        _0x1b7cf2 = "https://leafxcy.coding.net/api/user/leafxcy/project/validcode/shared-depot/validCode/git/blob/master/" + _0x232331 + ".json";
        console.log(_0x5539b3.msg[_0x5539b3.status]);
        console.log(_0x5539b3.updateMsg);
        console.log("现在运行的脚本版本是：" + _0x54e730 + "，最新脚本版本：" + _0x5539b3.latestVersion);
      } else {
        console.log(_0x5539b3.versionMsg);
      }
    } else {
      console.log(_0x5539b3.msg[_0x5539b3.status]);
    }
  } else {
    console.log(_0x33e107.errorMsg);
  }
}
async function _0x37bb70(_0x1986a1 = 0) {
  let _0x9e9678 = {
    url: _0x1b7cf2
  };
  await _0xa22e67("get", _0x9e9678);
  let _0x18c105 = _0x948144;
  if (!_0x18c105) {
    if (_0x1986a1 < _0x56f2eb) {
      await _0x37bb70(++_0x1986a1);
    }
    return;
  }
  _0x18c105?.["code"] == 0 && (_0x18c105 = JSON.parse(_0x18c105.data.file.data));
  if (_0x18c105.sharecodes) {
    for (let _0x1ee9d9 of _0x18c105.sharecodes) {
      if (_0x1ee9d9) {
        _0x22d297.push(_0x1ee9d9);
      }
    }
  }
  return;
}
function _0x84fb9d(_0x191ed3, _0xe2fe46 = "") {
  let _0x4815c6 = _0x191ed3.replace("//", "/").split("/")[1];
  const _0x2e0b35 = {
    Host: _0x4815c6,
    Connection: "keep-alive"
  };
  let _0x46dd94 = {
    url: _0x191ed3,
    headers: _0x2e0b35
  };
  _0xe2fe46 && (_0x46dd94.body = _0xe2fe46, _0x46dd94.headers["Content-Type"] = "application/json;charset=utf-8", _0x46dd94.headers["Content-Length"] = _0x46dd94.body ? _0x46dd94.body.length : 0);
  return _0x46dd94;
}
async function _0xa22e67(_0x186a17, _0x7dcef6) {
  _0x948144 = null;
  httpReq = null;
  httpResp = null;
  return new Promise(_0x28c5ab => {
    _0x80a76e.send(_0x186a17, _0x7dcef6, async (_0x1132ff, _0x4e7284, _0x5502cb) => {
      try {
        httpReq = _0x4e7284;
        httpResp = _0x5502cb;
        if (_0x1132ff) {
          console.log(_0x186a17 + "请求失败");
          console.log(JSON.stringify(_0x1132ff));
        } else {
          if (_0x5502cb.body) {
            if (typeof _0x5502cb.body == "object") {
              _0x948144 = _0x5502cb.body;
            } else {
              try {
                _0x948144 = JSON.parse(_0x5502cb.body);
              } catch (_0x284fcd) {
                _0x948144 = _0x5502cb.body;
              }
            }
          }
        }
      } catch (_0x5e305d) {
        console.log(_0x5e305d);
      } finally {
        _0x28c5ab();
      }
    });
  });
}
var _0x2541d4 = {
  _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
  encode: function (_0x4832b9) {
    var _0x2f32c3 = "";
    var _0x28402e, _0xe4aa87, _0x318e03, _0x465026, _0x18ca2e, _0x4b1b01, _0x33ba3a;
    var _0x2d4677 = 0;
    _0x4832b9 = _0x2541d4._utf8_encode(_0x4832b9);
    while (_0x2d4677 < _0x4832b9.length) {
      _0x28402e = _0x4832b9.charCodeAt(_0x2d4677++);
      _0xe4aa87 = _0x4832b9.charCodeAt(_0x2d4677++);
      _0x318e03 = _0x4832b9.charCodeAt(_0x2d4677++);
      _0x465026 = _0x28402e >> 2;
      _0x18ca2e = (_0x28402e & 3) << 4 | _0xe4aa87 >> 4;
      _0x4b1b01 = (_0xe4aa87 & 15) << 2 | _0x318e03 >> 6;
      _0x33ba3a = _0x318e03 & 63;
      if (isNaN(_0xe4aa87)) {
        _0x4b1b01 = _0x33ba3a = 64;
      } else {
        isNaN(_0x318e03) && (_0x33ba3a = 64);
      }
      _0x2f32c3 = _0x2f32c3 + this._keyStr.charAt(_0x465026) + this._keyStr.charAt(_0x18ca2e) + this._keyStr.charAt(_0x4b1b01) + this._keyStr.charAt(_0x33ba3a);
    }
    return _0x2f32c3;
  },
  decode: function (_0x53d73e) {
    var _0x575de4 = "";
    var _0x52190e, _0x3d67cc, _0x52d263;
    var _0x3b83d3, _0x5c21d8, _0x3989a6, _0x4b4e78;
    var _0x2bbe2b = 0;
    _0x53d73e = _0x53d73e.replace(/[^A-Za-z0-9+/=]/g, "");
    while (_0x2bbe2b < _0x53d73e.length) {
      _0x3b83d3 = this._keyStr.indexOf(_0x53d73e.charAt(_0x2bbe2b++));
      _0x5c21d8 = this._keyStr.indexOf(_0x53d73e.charAt(_0x2bbe2b++));
      _0x3989a6 = this._keyStr.indexOf(_0x53d73e.charAt(_0x2bbe2b++));
      _0x4b4e78 = this._keyStr.indexOf(_0x53d73e.charAt(_0x2bbe2b++));
      _0x52190e = _0x3b83d3 << 2 | _0x5c21d8 >> 4;
      _0x3d67cc = (_0x5c21d8 & 15) << 4 | _0x3989a6 >> 2;
      _0x52d263 = (_0x3989a6 & 3) << 6 | _0x4b4e78;
      _0x575de4 = _0x575de4 + String.fromCharCode(_0x52190e);
      _0x3989a6 != 64 && (_0x575de4 = _0x575de4 + String.fromCharCode(_0x3d67cc));
      _0x4b4e78 != 64 && (_0x575de4 = _0x575de4 + String.fromCharCode(_0x52d263));
    }
    _0x575de4 = _0x2541d4._utf8_decode(_0x575de4);
    return _0x575de4;
  },
  _utf8_encode: function (_0x3fe203) {
    _0x3fe203 = _0x3fe203.replace(/rn/g, "n");
    var _0x3e4e51 = "";
    for (var _0x410d3e = 0; _0x410d3e < _0x3fe203.length; _0x410d3e++) {
      var _0x571214 = _0x3fe203.charCodeAt(_0x410d3e);
      if (_0x571214 < 128) {
        _0x3e4e51 += String.fromCharCode(_0x571214);
      } else {
        _0x571214 > 127 && _0x571214 < 2048 ? (_0x3e4e51 += String.fromCharCode(_0x571214 >> 6 | 192), _0x3e4e51 += String.fromCharCode(_0x571214 & 63 | 128)) : (_0x3e4e51 += String.fromCharCode(_0x571214 >> 12 | 224), _0x3e4e51 += String.fromCharCode(_0x571214 >> 6 & 63 | 128), _0x3e4e51 += String.fromCharCode(_0x571214 & 63 | 128));
      }
    }
    return _0x3e4e51;
  },
  _utf8_decode: function (_0x288f40) {
    var _0x1d3b08 = "";
    var _0x268c56 = 0;
    c1 = c2 = 0;
    var _0x5d98c4 = c1;
    while (_0x268c56 < _0x288f40.length) {
      _0x5d98c4 = _0x288f40.charCodeAt(_0x268c56);
      if (_0x5d98c4 < 128) {
        _0x1d3b08 += String.fromCharCode(_0x5d98c4);
        _0x268c56++;
      } else {
        _0x5d98c4 > 191 && _0x5d98c4 < 224 ? (c2 = _0x288f40.charCodeAt(_0x268c56 + 1), _0x1d3b08 += String.fromCharCode((_0x5d98c4 & 31) << 6 | c2 & 63), _0x268c56 += 2) : (c2 = _0x288f40.charCodeAt(_0x268c56 + 1), c3 = _0x288f40.charCodeAt(_0x268c56 + 2), _0x1d3b08 += String.fromCharCode((_0x5d98c4 & 15) << 12 | (c2 & 63) << 6 | c3 & 63), _0x268c56 += 3);
      }
    }
    return _0x1d3b08;
  }
};
function _0x4276a8(_0x592ad2) {
  function _0x31d002(_0x114364, _0x202793) {
    return _0x114364 << _0x202793 | _0x114364 >>> 32 - _0x202793;
  }
  function _0x17df2c(_0x4197cb, _0x570cf8) {
    var _0xcb0831, _0x4c6683, _0x17294f, _0x483fbc, _0x394f03;
    _0x17294f = 2147483648 & _0x4197cb;
    _0x483fbc = 2147483648 & _0x570cf8;
    _0xcb0831 = 1073741824 & _0x4197cb;
    _0x4c6683 = 1073741824 & _0x570cf8;
    _0x394f03 = (1073741823 & _0x4197cb) + (1073741823 & _0x570cf8);
    return _0xcb0831 & _0x4c6683 ? 2147483648 ^ _0x394f03 ^ _0x17294f ^ _0x483fbc : _0xcb0831 | _0x4c6683 ? 1073741824 & _0x394f03 ? 3221225472 ^ _0x394f03 ^ _0x17294f ^ _0x483fbc : 1073741824 ^ _0x394f03 ^ _0x17294f ^ _0x483fbc : _0x394f03 ^ _0x17294f ^ _0x483fbc;
  }
  function _0x2db9b1(_0x57a474, _0x14a0a0, _0x5580eb) {
    return _0x57a474 & _0x14a0a0 | ~_0x57a474 & _0x5580eb;
  }
  function _0x514f40(_0x53d7a2, _0x485d9f, _0x1f1480) {
    return _0x53d7a2 & _0x1f1480 | _0x485d9f & ~_0x1f1480;
  }
  function _0x36d197(_0x33c4fc, _0x1feeb6, _0x14d205) {
    return _0x33c4fc ^ _0x1feeb6 ^ _0x14d205;
  }
  function _0x1599ef(_0x19fc80, _0x41b29f, _0x7b2954) {
    return _0x41b29f ^ (_0x19fc80 | ~_0x7b2954);
  }
  function _0x47d54f(_0x4b6c8d, _0xc01ec, _0x33fe63, _0x4e6948, _0x9f8cc7, _0x56eecc, _0x24dbe1) {
    _0x4b6c8d = _0x17df2c(_0x4b6c8d, _0x17df2c(_0x17df2c(_0x2db9b1(_0xc01ec, _0x33fe63, _0x4e6948), _0x9f8cc7), _0x24dbe1));
    return _0x17df2c(_0x31d002(_0x4b6c8d, _0x56eecc), _0xc01ec);
  }
  function _0x19c3f1(_0x2d2635, _0xb612a, _0x38cf1b, _0x295ea0, _0x28e8ad, _0x3a6df0, _0x223e7d) {
    _0x2d2635 = _0x17df2c(_0x2d2635, _0x17df2c(_0x17df2c(_0x514f40(_0xb612a, _0x38cf1b, _0x295ea0), _0x28e8ad), _0x223e7d));
    return _0x17df2c(_0x31d002(_0x2d2635, _0x3a6df0), _0xb612a);
  }
  function _0x5224d8(_0x2ab2d5, _0x5b5531, _0x1c60c3, _0x561b58, _0x228ab8, _0x551fae, _0x5cb9b2) {
    _0x2ab2d5 = _0x17df2c(_0x2ab2d5, _0x17df2c(_0x17df2c(_0x36d197(_0x5b5531, _0x1c60c3, _0x561b58), _0x228ab8), _0x5cb9b2));
    return _0x17df2c(_0x31d002(_0x2ab2d5, _0x551fae), _0x5b5531);
  }
  function _0x50823e(_0x2ab1d2, _0x524000, _0x4cf4bc, _0x544fa5, _0x43945d, _0x40b12c, _0x27d494) {
    _0x2ab1d2 = _0x17df2c(_0x2ab1d2, _0x17df2c(_0x17df2c(_0x1599ef(_0x524000, _0x4cf4bc, _0x544fa5), _0x43945d), _0x27d494));
    return _0x17df2c(_0x31d002(_0x2ab1d2, _0x40b12c), _0x524000);
  }
  function _0x34a3db(_0x3cfcec) {
    for (var _0x3cb04f, _0x51871d = _0x3cfcec.length, _0x282fec = _0x51871d + 8, _0x2862e2 = (_0x282fec - _0x282fec % 64) / 64, _0x3529d5 = 16 * (_0x2862e2 + 1), _0x38d3e2 = new Array(_0x3529d5 - 1), _0x7d1eb0 = 0, _0x4562a6 = 0; _0x51871d > _0x4562a6;) {
      _0x3cb04f = (_0x4562a6 - _0x4562a6 % 4) / 4;
      _0x7d1eb0 = _0x4562a6 % 4 * 8;
      _0x38d3e2[_0x3cb04f] = _0x38d3e2[_0x3cb04f] | _0x3cfcec.charCodeAt(_0x4562a6) << _0x7d1eb0;
      _0x4562a6++;
    }
    _0x3cb04f = (_0x4562a6 - _0x4562a6 % 4) / 4;
    _0x7d1eb0 = _0x4562a6 % 4 * 8;
    _0x38d3e2[_0x3cb04f] = _0x38d3e2[_0x3cb04f] | 128 << _0x7d1eb0;
    _0x38d3e2[_0x3529d5 - 2] = _0x51871d << 3;
    _0x38d3e2[_0x3529d5 - 1] = _0x51871d >>> 29;
    return _0x38d3e2;
  }
  function _0x4e32ed(_0x2e6928) {
    var _0x82e6bd,
      _0x4acd43,
      _0x36a487 = "",
      _0x3e0f01 = "";
    for (_0x4acd43 = 0; 3 >= _0x4acd43; _0x4acd43++) {
      _0x82e6bd = _0x2e6928 >>> 8 * _0x4acd43 & 255;
      _0x3e0f01 = "0" + _0x82e6bd.toString(16);
      _0x36a487 += _0x3e0f01.substr(_0x3e0f01.length - 2, 2);
    }
    return _0x36a487;
  }
  function _0x546b98(_0x113bed) {
    _0x113bed = _0x113bed.replace(/\r\n/g, "\n");
    for (var _0x327c66 = "", _0x3f3bbc = 0; _0x3f3bbc < _0x113bed.length; _0x3f3bbc++) {
      var _0x9cd974 = _0x113bed.charCodeAt(_0x3f3bbc);
      128 > _0x9cd974 ? _0x327c66 += String.fromCharCode(_0x9cd974) : _0x9cd974 > 127 && 2048 > _0x9cd974 ? (_0x327c66 += String.fromCharCode(_0x9cd974 >> 6 | 192), _0x327c66 += String.fromCharCode(63 & _0x9cd974 | 128)) : (_0x327c66 += String.fromCharCode(_0x9cd974 >> 12 | 224), _0x327c66 += String.fromCharCode(_0x9cd974 >> 6 & 63 | 128), _0x327c66 += String.fromCharCode(63 & _0x9cd974 | 128));
    }
    return _0x327c66;
  }
  var _0x11b584,
    _0x5b58bb,
    _0x1aa2b4,
    _0x339257,
    _0x2ec6f1,
    _0x4378e7,
    _0x158a91,
    _0x59de67,
    _0x155017,
    _0x11b137 = [],
    _0xa10139 = 7,
    _0x3820ac = 12,
    _0x17888b = 17,
    _0x6dbab7 = 22,
    _0xa4ecaf = 5,
    _0x3c5877 = 9,
    _0x275999 = 14,
    _0x3e365c = 20,
    _0x3f762b = 4,
    _0x31a97c = 11,
    _0x16b449 = 16,
    _0x4809c8 = 23,
    _0x47157b = 6,
    _0x1473a3 = 10,
    _0x5e5610 = 15,
    _0x51a3c6 = 21;
  for (_0x592ad2 = _0x546b98(_0x592ad2), _0x11b137 = _0x34a3db(_0x592ad2), _0x4378e7 = 1732584193, _0x158a91 = 4023233417, _0x59de67 = 2562383102, _0x155017 = 271733878, _0x11b584 = 0; _0x11b584 < _0x11b137.length; _0x11b584 += 16) {
    _0x5b58bb = _0x4378e7;
    _0x1aa2b4 = _0x158a91;
    _0x339257 = _0x59de67;
    _0x2ec6f1 = _0x155017;
    _0x4378e7 = _0x47d54f(_0x4378e7, _0x158a91, _0x59de67, _0x155017, _0x11b137[_0x11b584 + 0], _0xa10139, 3614090360);
    _0x155017 = _0x47d54f(_0x155017, _0x4378e7, _0x158a91, _0x59de67, _0x11b137[_0x11b584 + 1], _0x3820ac, 3905402710);
    _0x59de67 = _0x47d54f(_0x59de67, _0x155017, _0x4378e7, _0x158a91, _0x11b137[_0x11b584 + 2], _0x17888b, 606105819);
    _0x158a91 = _0x47d54f(_0x158a91, _0x59de67, _0x155017, _0x4378e7, _0x11b137[_0x11b584 + 3], _0x6dbab7, 3250441966);
    _0x4378e7 = _0x47d54f(_0x4378e7, _0x158a91, _0x59de67, _0x155017, _0x11b137[_0x11b584 + 4], _0xa10139, 4118548399);
    _0x155017 = _0x47d54f(_0x155017, _0x4378e7, _0x158a91, _0x59de67, _0x11b137[_0x11b584 + 5], _0x3820ac, 1200080426);
    _0x59de67 = _0x47d54f(_0x59de67, _0x155017, _0x4378e7, _0x158a91, _0x11b137[_0x11b584 + 6], _0x17888b, 2821735955);
    _0x158a91 = _0x47d54f(_0x158a91, _0x59de67, _0x155017, _0x4378e7, _0x11b137[_0x11b584 + 7], _0x6dbab7, 4249261313);
    _0x4378e7 = _0x47d54f(_0x4378e7, _0x158a91, _0x59de67, _0x155017, _0x11b137[_0x11b584 + 8], _0xa10139, 1770035416);
    _0x155017 = _0x47d54f(_0x155017, _0x4378e7, _0x158a91, _0x59de67, _0x11b137[_0x11b584 + 9], _0x3820ac, 2336552879);
    _0x59de67 = _0x47d54f(_0x59de67, _0x155017, _0x4378e7, _0x158a91, _0x11b137[_0x11b584 + 10], _0x17888b, 4294925233);
    _0x158a91 = _0x47d54f(_0x158a91, _0x59de67, _0x155017, _0x4378e7, _0x11b137[_0x11b584 + 11], _0x6dbab7, 2304563134);
    _0x4378e7 = _0x47d54f(_0x4378e7, _0x158a91, _0x59de67, _0x155017, _0x11b137[_0x11b584 + 12], _0xa10139, 1804603682);
    _0x155017 = _0x47d54f(_0x155017, _0x4378e7, _0x158a91, _0x59de67, _0x11b137[_0x11b584 + 13], _0x3820ac, 4254626195);
    _0x59de67 = _0x47d54f(_0x59de67, _0x155017, _0x4378e7, _0x158a91, _0x11b137[_0x11b584 + 14], _0x17888b, 2792965006);
    _0x158a91 = _0x47d54f(_0x158a91, _0x59de67, _0x155017, _0x4378e7, _0x11b137[_0x11b584 + 15], _0x6dbab7, 1236535329);
    _0x4378e7 = _0x19c3f1(_0x4378e7, _0x158a91, _0x59de67, _0x155017, _0x11b137[_0x11b584 + 1], _0xa4ecaf, 4129170786);
    _0x155017 = _0x19c3f1(_0x155017, _0x4378e7, _0x158a91, _0x59de67, _0x11b137[_0x11b584 + 6], _0x3c5877, 3225465664);
    _0x59de67 = _0x19c3f1(_0x59de67, _0x155017, _0x4378e7, _0x158a91, _0x11b137[_0x11b584 + 11], _0x275999, 643717713);
    _0x158a91 = _0x19c3f1(_0x158a91, _0x59de67, _0x155017, _0x4378e7, _0x11b137[_0x11b584 + 0], _0x3e365c, 3921069994);
    _0x4378e7 = _0x19c3f1(_0x4378e7, _0x158a91, _0x59de67, _0x155017, _0x11b137[_0x11b584 + 5], _0xa4ecaf, 3593408605);
    _0x155017 = _0x19c3f1(_0x155017, _0x4378e7, _0x158a91, _0x59de67, _0x11b137[_0x11b584 + 10], _0x3c5877, 38016083);
    _0x59de67 = _0x19c3f1(_0x59de67, _0x155017, _0x4378e7, _0x158a91, _0x11b137[_0x11b584 + 15], _0x275999, 3634488961);
    _0x158a91 = _0x19c3f1(_0x158a91, _0x59de67, _0x155017, _0x4378e7, _0x11b137[_0x11b584 + 4], _0x3e365c, 3889429448);
    _0x4378e7 = _0x19c3f1(_0x4378e7, _0x158a91, _0x59de67, _0x155017, _0x11b137[_0x11b584 + 9], _0xa4ecaf, 568446438);
    _0x155017 = _0x19c3f1(_0x155017, _0x4378e7, _0x158a91, _0x59de67, _0x11b137[_0x11b584 + 14], _0x3c5877, 3275163606);
    _0x59de67 = _0x19c3f1(_0x59de67, _0x155017, _0x4378e7, _0x158a91, _0x11b137[_0x11b584 + 3], _0x275999, 4107603335);
    _0x158a91 = _0x19c3f1(_0x158a91, _0x59de67, _0x155017, _0x4378e7, _0x11b137[_0x11b584 + 8], _0x3e365c, 1163531501);
    _0x4378e7 = _0x19c3f1(_0x4378e7, _0x158a91, _0x59de67, _0x155017, _0x11b137[_0x11b584 + 13], _0xa4ecaf, 2850285829);
    _0x155017 = _0x19c3f1(_0x155017, _0x4378e7, _0x158a91, _0x59de67, _0x11b137[_0x11b584 + 2], _0x3c5877, 4243563512);
    _0x59de67 = _0x19c3f1(_0x59de67, _0x155017, _0x4378e7, _0x158a91, _0x11b137[_0x11b584 + 7], _0x275999, 1735328473);
    _0x158a91 = _0x19c3f1(_0x158a91, _0x59de67, _0x155017, _0x4378e7, _0x11b137[_0x11b584 + 12], _0x3e365c, 2368359562);
    _0x4378e7 = _0x5224d8(_0x4378e7, _0x158a91, _0x59de67, _0x155017, _0x11b137[_0x11b584 + 5], _0x3f762b, 4294588738);
    _0x155017 = _0x5224d8(_0x155017, _0x4378e7, _0x158a91, _0x59de67, _0x11b137[_0x11b584 + 8], _0x31a97c, 2272392833);
    _0x59de67 = _0x5224d8(_0x59de67, _0x155017, _0x4378e7, _0x158a91, _0x11b137[_0x11b584 + 11], _0x16b449, 1839030562);
    _0x158a91 = _0x5224d8(_0x158a91, _0x59de67, _0x155017, _0x4378e7, _0x11b137[_0x11b584 + 14], _0x4809c8, 4259657740);
    _0x4378e7 = _0x5224d8(_0x4378e7, _0x158a91, _0x59de67, _0x155017, _0x11b137[_0x11b584 + 1], _0x3f762b, 2763975236);
    _0x155017 = _0x5224d8(_0x155017, _0x4378e7, _0x158a91, _0x59de67, _0x11b137[_0x11b584 + 4], _0x31a97c, 1272893353);
    _0x59de67 = _0x5224d8(_0x59de67, _0x155017, _0x4378e7, _0x158a91, _0x11b137[_0x11b584 + 7], _0x16b449, 4139469664);
    _0x158a91 = _0x5224d8(_0x158a91, _0x59de67, _0x155017, _0x4378e7, _0x11b137[_0x11b584 + 10], _0x4809c8, 3200236656);
    _0x4378e7 = _0x5224d8(_0x4378e7, _0x158a91, _0x59de67, _0x155017, _0x11b137[_0x11b584 + 13], _0x3f762b, 681279174);
    _0x155017 = _0x5224d8(_0x155017, _0x4378e7, _0x158a91, _0x59de67, _0x11b137[_0x11b584 + 0], _0x31a97c, 3936430074);
    _0x59de67 = _0x5224d8(_0x59de67, _0x155017, _0x4378e7, _0x158a91, _0x11b137[_0x11b584 + 3], _0x16b449, 3572445317);
    _0x158a91 = _0x5224d8(_0x158a91, _0x59de67, _0x155017, _0x4378e7, _0x11b137[_0x11b584 + 6], _0x4809c8, 76029189);
    _0x4378e7 = _0x5224d8(_0x4378e7, _0x158a91, _0x59de67, _0x155017, _0x11b137[_0x11b584 + 9], _0x3f762b, 3654602809);
    _0x155017 = _0x5224d8(_0x155017, _0x4378e7, _0x158a91, _0x59de67, _0x11b137[_0x11b584 + 12], _0x31a97c, 3873151461);
    _0x59de67 = _0x5224d8(_0x59de67, _0x155017, _0x4378e7, _0x158a91, _0x11b137[_0x11b584 + 15], _0x16b449, 530742520);
    _0x158a91 = _0x5224d8(_0x158a91, _0x59de67, _0x155017, _0x4378e7, _0x11b137[_0x11b584 + 2], _0x4809c8, 3299628645);
    _0x4378e7 = _0x50823e(_0x4378e7, _0x158a91, _0x59de67, _0x155017, _0x11b137[_0x11b584 + 0], _0x47157b, 4096336452);
    _0x155017 = _0x50823e(_0x155017, _0x4378e7, _0x158a91, _0x59de67, _0x11b137[_0x11b584 + 7], _0x1473a3, 1126891415);
    _0x59de67 = _0x50823e(_0x59de67, _0x155017, _0x4378e7, _0x158a91, _0x11b137[_0x11b584 + 14], _0x5e5610, 2878612391);
    _0x158a91 = _0x50823e(_0x158a91, _0x59de67, _0x155017, _0x4378e7, _0x11b137[_0x11b584 + 5], _0x51a3c6, 4237533241);
    _0x4378e7 = _0x50823e(_0x4378e7, _0x158a91, _0x59de67, _0x155017, _0x11b137[_0x11b584 + 12], _0x47157b, 1700485571);
    _0x155017 = _0x50823e(_0x155017, _0x4378e7, _0x158a91, _0x59de67, _0x11b137[_0x11b584 + 3], _0x1473a3, 2399980690);
    _0x59de67 = _0x50823e(_0x59de67, _0x155017, _0x4378e7, _0x158a91, _0x11b137[_0x11b584 + 10], _0x5e5610, 4293915773);
    _0x158a91 = _0x50823e(_0x158a91, _0x59de67, _0x155017, _0x4378e7, _0x11b137[_0x11b584 + 1], _0x51a3c6, 2240044497);
    _0x4378e7 = _0x50823e(_0x4378e7, _0x158a91, _0x59de67, _0x155017, _0x11b137[_0x11b584 + 8], _0x47157b, 1873313359);
    _0x155017 = _0x50823e(_0x155017, _0x4378e7, _0x158a91, _0x59de67, _0x11b137[_0x11b584 + 15], _0x1473a3, 4264355552);
    _0x59de67 = _0x50823e(_0x59de67, _0x155017, _0x4378e7, _0x158a91, _0x11b137[_0x11b584 + 6], _0x5e5610, 2734768916);
    _0x158a91 = _0x50823e(_0x158a91, _0x59de67, _0x155017, _0x4378e7, _0x11b137[_0x11b584 + 13], _0x51a3c6, 1309151649);
    _0x4378e7 = _0x50823e(_0x4378e7, _0x158a91, _0x59de67, _0x155017, _0x11b137[_0x11b584 + 4], _0x47157b, 4149444226);
    _0x155017 = _0x50823e(_0x155017, _0x4378e7, _0x158a91, _0x59de67, _0x11b137[_0x11b584 + 11], _0x1473a3, 3174756917);
    _0x59de67 = _0x50823e(_0x59de67, _0x155017, _0x4378e7, _0x158a91, _0x11b137[_0x11b584 + 2], _0x5e5610, 718787259);
    _0x158a91 = _0x50823e(_0x158a91, _0x59de67, _0x155017, _0x4378e7, _0x11b137[_0x11b584 + 9], _0x51a3c6, 3951481745);
    _0x4378e7 = _0x17df2c(_0x4378e7, _0x5b58bb);
    _0x158a91 = _0x17df2c(_0x158a91, _0x1aa2b4);
    _0x59de67 = _0x17df2c(_0x59de67, _0x339257);
    _0x155017 = _0x17df2c(_0x155017, _0x2ec6f1);
  }
  var _0x3ceee9 = _0x4e32ed(_0x4378e7) + _0x4e32ed(_0x158a91) + _0x4e32ed(_0x59de67) + _0x4e32ed(_0x155017);
  return _0x3ceee9.toLowerCase();
}
function _0x512345(_0x1ddede, _0x2b7a11) {
  "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0);
  return new class {
    constructor(_0x1b7dbe, _0x339ed0) {
      this.name = _0x1b7dbe;
      this.notifyStr = "";
      this.startTime = new Date().getTime();
      Object.assign(this, _0x339ed0);
      console.log(this.name + " 开始运行：\n");
    }
    isNode() {
      return "undefined" != typeof module && !!module.exports;
    }
    isQuanX() {
      return "undefined" != typeof $task;
    }
    isSurge() {
      return "undefined" != typeof $httpClient && "undefined" == typeof $loon;
    }
    isLoon() {
      return "undefined" != typeof $loon;
    }
    getdata(_0x2199f9) {
      let _0x27d28a = this.getval(_0x2199f9);
      if (/^@/.test(_0x2199f9)) {
        const [, _0x6817b5, _0x383177] = /^@(.*?)\.(.*?)$/.exec(_0x2199f9),
          _0x51c947 = _0x6817b5 ? this.getval(_0x6817b5) : "";
        if (_0x51c947) {
          try {
            const _0x35c3a4 = JSON.parse(_0x51c947);
            _0x27d28a = _0x35c3a4 ? this.lodash_get(_0x35c3a4, _0x383177, "") : _0x27d28a;
          } catch (_0x5baec9) {
            _0x27d28a = "";
          }
        }
      }
      return _0x27d28a;
    }
    setdata(_0xfa44fd, _0x3d6b7a) {
      let _0x33d37e = !1;
      if (/^@/.test(_0x3d6b7a)) {
        const [, _0xff00d4, _0xd0092d] = /^@(.*?)\.(.*?)$/.exec(_0x3d6b7a),
          _0x30f0c5 = this.getval(_0xff00d4),
          _0x1d1148 = _0xff00d4 ? "null" === _0x30f0c5 ? null : _0x30f0c5 || "{}" : "{}";
        try {
          const _0x57c6d4 = JSON.parse(_0x1d1148);
          this.lodash_set(_0x57c6d4, _0xd0092d, _0xfa44fd);
          _0x33d37e = this.setval(JSON.stringify(_0x57c6d4), _0xff00d4);
        } catch (_0xb46963) {
          const _0x3b4e11 = {};
          this.lodash_set(_0x3b4e11, _0xd0092d, _0xfa44fd);
          _0x33d37e = this.setval(JSON.stringify(_0x3b4e11), _0xff00d4);
        }
      } else {
        _0x33d37e = this.setval(_0xfa44fd, _0x3d6b7a);
      }
      return _0x33d37e;
    }
    getval(_0x5ad49) {
      return this.isSurge() || this.isLoon() ? $persistentStore.read(_0x5ad49) : this.isQuanX() ? $prefs.valueForKey(_0x5ad49) : this.isNode() ? (this.data = this.loaddata(), this.data[_0x5ad49]) : this.data && this.data[_0x5ad49] || null;
    }
    setval(_0x1b47ef, _0x5845e2) {
      return this.isSurge() || this.isLoon() ? $persistentStore.write(_0x1b47ef, _0x5845e2) : this.isQuanX() ? $prefs.setValueForKey(_0x1b47ef, _0x5845e2) : this.isNode() ? (this.data = this.loaddata(), this.data[_0x5845e2] = _0x1b47ef, this.writedata(), !0) : this.data && this.data[_0x5845e2] || null;
    }
    send(_0x4a9607, _0x630e41, _0x27b3ef = () => {}) {
      if (_0x4a9607 != "get" && _0x4a9607 != "post" && _0x4a9607 != "put" && _0x4a9607 != "delete") {
        console.log("无效的http方法：" + _0x4a9607);
        return;
      }
      if (_0x4a9607 == "get" && _0x630e41.headers) {
        delete _0x630e41.headers["Content-Type"];
        delete _0x630e41.headers["Content-Length"];
      } else {
        if (_0x630e41.body && _0x630e41.headers) {
          if (!_0x630e41.headers["Content-Type"]) {
            _0x630e41.headers["Content-Type"] = "application/x-www-form-urlencoded";
          }
        }
      }
      if (this.isSurge() || this.isLoon()) {
        if (this.isSurge() && this.isNeedRewrite) {
          _0x630e41.headers = _0x630e41.headers || {};
          const _0x2f1f73 = {
            "X-Surge-Skip-Scripting": !1
          };
          Object.assign(_0x630e41.headers, _0x2f1f73);
        }
        let _0x2d6e1c = {
          method: _0x4a9607,
          url: _0x630e41.url,
          headers: _0x630e41.headers,
          timeout: _0x630e41.timeout,
          data: _0x630e41.body
        };
        if (_0x4a9607 == "get") {
          delete _0x2d6e1c.data;
        }
        $axios(_0x2d6e1c).then(_0xb4dcf1 => {
          const {
              status: _0x4aef94,
              request: _0x303e63,
              headers: _0x463b8c,
              data: _0x532c18
            } = _0xb4dcf1,
            _0x189dc3 = {
              statusCode: _0x4aef94,
              headers: _0x463b8c,
              body: _0x532c18
            };
          _0x27b3ef(null, _0x303e63, _0x189dc3);
        }).catch(_0x89a3c8 => console.log(_0x89a3c8));
      } else {
        if (this.isQuanX()) {
          const _0x563721 = {
            hints: !1
          };
          _0x630e41.method = _0x4a9607.toUpperCase();
          this.isNeedRewrite && (_0x630e41.opts = _0x630e41.opts || {}, Object.assign(_0x630e41.opts, _0x563721));
          $task.fetch(_0x630e41).then(_0xecc207 => {
            const {
                statusCode: _0xacaf2a,
                request: _0x579fd1,
                headers: _0x5e114d,
                body: _0x8e7939
              } = _0xecc207,
              _0x468814 = {
                statusCode: _0xacaf2a,
                headers: _0x5e114d,
                body: _0x8e7939
              };
            _0x27b3ef(null, _0x579fd1, _0x468814);
          }, _0x223879 => _0x27b3ef(_0x223879));
        } else {
          if (this.isNode()) {
            this.got = this.got ? this.got : require("got");
            const {
                url: _0x47b6ea,
                ..._0x56061c
              } = _0x630e41,
              _0x40bfc1 = {
                followRedirect: false
              };
            this.instance = this.got.extend(_0x40bfc1);
            this.instance[_0x4a9607](_0x47b6ea, _0x56061c).then(_0x486829 => {
              const {
                  statusCode: _0x491da1,
                  request: _0x5aa53e,
                  headers: _0x402f99,
                  body: _0x17416d
                } = _0x486829,
                _0x5a5b56 = {
                  statusCode: _0x491da1,
                  headers: _0x402f99,
                  body: _0x17416d
                };
              _0x27b3ef(null, _0x5aa53e, _0x5a5b56);
            }, _0x2e1b13 => {
              const {
                message: _0x5bbe83,
                response: _0x27d4ad
              } = _0x2e1b13;
              _0x27b3ef(_0x5bbe83, _0x27d4ad, _0x27d4ad && _0x27d4ad.body);
            });
          }
        }
      }
    }
    time(_0x5aacfb) {
      let _0x3f4429 = {
        "M+": new Date().getMonth() + 1,
        "d+": new Date().getDate(),
        "h+": new Date().getHours(),
        "m+": new Date().getMinutes(),
        "s+": new Date().getSeconds(),
        "q+": Math.floor((new Date().getMonth() + 3) / 3),
        S: new Date().getMilliseconds()
      };
      /(y+)/.test(_0x5aacfb) && (_0x5aacfb = _0x5aacfb.replace(RegExp.$1, (new Date().getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let _0x35431e in _0x3f4429) new RegExp("(" + _0x35431e + ")").test(_0x5aacfb) && (_0x5aacfb = _0x5aacfb.replace(RegExp.$1, 1 == RegExp.$1.length ? _0x3f4429[_0x35431e] : ("00" + _0x3f4429[_0x35431e]).substr(("" + _0x3f4429[_0x35431e]).length)));
      return _0x5aacfb;
    }
    async showmsg() {
      if (!this.notifyStr) {
        return;
      }
      let _0x3ede45 = this.name + " 运行通知\n\n" + this.notifyStr;
      if (_0x80a76e.isNode()) {
        var _0x1af3d1 = require("./sendNotify");
        console.log("\n============== 推送 ==============");
        await _0x1af3d1.sendNotify(this.name, _0x3ede45);
      } else {
        this.msg(_0x3ede45);
      }
    }
    logAndNotify(_0x501904) {
      console.log(_0x501904);
      this.notifyStr += _0x501904;
      this.notifyStr += "\n";
    }
    msg(_0x2869f5 = t, _0xe3f779 = "", _0x4e32cb = "", _0x20be33) {
      const _0x5d00ca = _0xb2a858 => {
        if (!_0xb2a858) {
          return _0xb2a858;
        }
        if ("string" == typeof _0xb2a858) {
          return this.isLoon() ? _0xb2a858 : this.isQuanX() ? {
            "open-url": _0xb2a858
          } : this.isSurge() ? {
            url: _0xb2a858
          } : void 0;
        }
        if ("object" == typeof _0xb2a858) {
          if (this.isLoon()) {
            let _0x4de04a = _0xb2a858.openUrl || _0xb2a858.url || _0xb2a858["open-url"],
              _0x668e98 = _0xb2a858.mediaUrl || _0xb2a858["media-url"];
            const _0x5428b0 = {
              openUrl: _0x4de04a,
              mediaUrl: _0x668e98
            };
            return _0x5428b0;
          }
          if (this.isQuanX()) {
            let _0x38d997 = _0xb2a858["open-url"] || _0xb2a858.url || _0xb2a858.openUrl,
              _0x5bf316 = _0xb2a858["media-url"] || _0xb2a858.mediaUrl;
            const _0xd9be80 = {
              "open-url": _0x38d997,
              "media-url": _0x5bf316
            };
            return _0xd9be80;
          }
          if (this.isSurge()) {
            let _0x2d71b9 = _0xb2a858.url || _0xb2a858.openUrl || _0xb2a858["open-url"];
            const _0x1f6b12 = {
              url: _0x2d71b9
            };
            return _0x1f6b12;
          }
        }
      };
      this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(_0x2869f5, _0xe3f779, _0x4e32cb, _0x5d00ca(_0x20be33)) : this.isQuanX() && $notify(_0x2869f5, _0xe3f779, _0x4e32cb, _0x5d00ca(_0x20be33)));
      let _0x430026 = ["", "============== 系统通知 =============="];
      _0x430026.push(_0x2869f5);
      _0xe3f779 && _0x430026.push(_0xe3f779);
      _0x4e32cb && _0x430026.push(_0x4e32cb);
      console.log(_0x430026.join("\n"));
    }
    getMin(_0x558016, _0x25b8fc) {
      return _0x558016 < _0x25b8fc ? _0x558016 : _0x25b8fc;
    }
    getMax(_0x35b1b3, _0xdd4a05) {
      return _0x35b1b3 < _0xdd4a05 ? _0xdd4a05 : _0x35b1b3;
    }
    padStr(_0x2e3910, _0x571bfe, _0x33ea9c = "0") {
      let _0x297028 = String(_0x2e3910),
        _0x190fde = _0x571bfe > _0x297028.length ? _0x571bfe - _0x297028.length : 0,
        _0x56d41d = "";
      for (let _0x3ae17e = 0; _0x3ae17e < _0x190fde; _0x3ae17e++) {
        _0x56d41d += _0x33ea9c;
      }
      _0x56d41d += _0x297028;
      return _0x56d41d;
    }
    json2str(_0x22736c, _0x3ddb7d, _0x5f0f7f = false) {
      let _0x1fea67 = [];
      for (let _0x170609 of Object.keys(_0x22736c).sort()) {
        let _0x17339f = _0x22736c[_0x170609];
        if (_0x17339f && _0x5f0f7f) {
          _0x17339f = encodeURIComponent(_0x17339f);
        }
        _0x1fea67.push(_0x170609 + "=" + _0x17339f);
      }
      return _0x1fea67.join(_0x3ddb7d);
    }
    str2json(_0x15238d, _0x4130d3 = false) {
      let _0x20429e = {};
      for (let _0x32f82d of _0x15238d.split("&")) {
        if (!_0x32f82d) {
          continue;
        }
        let _0x21c0b2 = _0x32f82d.indexOf("=");
        if (_0x21c0b2 == -1) {
          continue;
        }
        let _0x3b25ce = _0x32f82d.substr(0, _0x21c0b2),
          _0xaf2326 = _0x32f82d.substr(_0x21c0b2 + 1);
        if (_0x4130d3) {
          _0xaf2326 = decodeURIComponent(_0xaf2326);
        }
        _0x20429e[_0x3b25ce] = _0xaf2326;
      }
      return _0x20429e;
    }
    randomString(_0x3a0264, _0x246208 = "abcdef0123456789") {
      let _0x793482 = "";
      for (let _0x57b564 = 0; _0x57b564 < _0x3a0264; _0x57b564++) {
        _0x793482 += _0x246208.charAt(Math.floor(Math.random() * _0x246208.length));
      }
      return _0x793482;
    }
    randomList(_0x22815e) {
      let _0x4d4a21 = Math.floor(Math.random() * _0x22815e.length);
      return _0x22815e[_0x4d4a21];
    }
    wait(_0x41c706) {
      return new Promise(_0x203b34 => setTimeout(_0x203b34, _0x41c706));
    }
    done(_0x40a41d = {}) {
      const _0x10c330 = new Date().getTime(),
        _0xf3f6ed = (_0x10c330 - this.startTime) / 1000;
      console.log("\n" + this.name + " 运行结束，共运行了 " + _0xf3f6ed + " 秒！");
      if (this.isSurge() || this.isQuanX() || this.isLoon()) {
        $done(_0x40a41d);
      }
    }
  }(_0x1ddede, _0x2b7a11);
}