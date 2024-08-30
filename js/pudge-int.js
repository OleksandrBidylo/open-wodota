const items = [
  {
    startingItems: {
      grenade: "../img/Blood_grenade.webp",
      wraithBand: "../img/wband.png",
      bracer: "../img/bracer.png",
      nullTalisman: "../img/nullt.png",
      stick: "../img/Magic_wand.webp",
      ironBranch: "../img/Iron_Branchwebp.webp",
    },
    earlyGame: {
      soulReaver: "../img/soul-reaver.png",
      phaseBoots: `../img/phboots.png`,
      powerThreads: "../img/powert.png",
      armlet: "../img/armlet.png",
      midas: "../img/midas.png",
      solarCrest: "../img/solar.png",
      bladeMail: "../img/bladem.png",
      magicArrows: "../img/magicArrows.png",
      radiance: `../img/radiance.png`,
      manaRadiance: `../img/manaRadiance.png`,
      healthRadiance: `../img/healthRadiance.png`,
      orchid: `../img/orchid.png`,
      diffusalBlade: `../img/Diffusal_Blade.webp`,
      venomSong: `../img/venomSong.png`,
      magCrit: `../img/magcrit.png`,
      glimerCape: `../img/glimer.png`,
      forceStaff: `../img/Force_Staff_icon.webp`,
      spiritVessel: `../img/spiritVessel.png`,
    },
    coreItems: {
      upBm: `../img/upBm.png`,
      bkb: `../img/bkb.png`,
      skullBasher: `../img/Skull_Basher_icon.webp`,
      desolator: "../img/Desolator_icon.webp",
      mantaStyle: "../img/manta.png",
      daedalus: "../img/buriza.png",
      disperser: "../img/diffusal.png",
      diffusalBasher: `../img/diffusalBasher.png`,
      diffusal2: `../img/diffusal2.png`,
      bloodThorn: "../img/bthorn.png",
      butterfly: "../img/bfly.png",
      upArmlet: "../img/upArmlet.png",
      glepnir: `../img/glepnir.png`,
      mjolnir: `../img/mjolnir.png`,
      cuiras: `../img/cuiras.png`,
      khanda: `../img/khanda.png`,
      upMael: `../img/upMael.png`,
      parasma: `../img/parasha.png`,
      upGlimer: `../img/upglimer.png`,
      satanic: `../img/satanic.png`,
      skadi: `../img/skadi.png`,
      pike: `../img/pike.png`,
      octarine: `../img/octarine.png`,
      upForce: `../img/upForce.png`,
      eblade: `../img/eblade.png`,
      windWaker: "../img/windw.png",
      tarasque: "../img/heart.png",
      sangeYasha: "../img/syasha.png",
      shiva: "../img/shiva.png",
    },
    lateGame: {
      owerhBlink: "../img/oblink.png",
      swiftBlink: "../img/sblink.png",
      arcaneBlink: "../img/ablink.png",
      moonShard: "../img/moonsh.png",
      hex: "../img/hex.png",
      aghanimScepter: "../img/moonAghanim.png",
      upPower: `../img/upPower.png`,
      upPhase: `../img/upPhase.png`,
      moonYasha: `../img/yashaYasha.png`,
      moonKaya: `../img/kayaKaya.png`,
      moonSange: `../img/sangeSange.png`,
      abysalBlade: `../img/basher.png`,
      refresher: "../img/Refresher_Orb_icon.webp",
    },
  },
];

const skills = [
  {
    Pudge: {
      heroIcon: "../img/Pudge_icon.webp",
      meatHook: "../img/hook.png",
      rot: "../img/rot.png",
      fleshHeap: "../img/flesh-heap.png",
      dismember: "../img/dismamber.png",
    },
  },
];

const itemBuilds = [
  {
    PudgeAg: {
      item1: items[0].startingItems.grenade,
      item2: items[0].startingItems.wraithBand,

      //////////////////////////////////////
      item5: items[0].earlyGame.powerThreads,
      item6: items[0].earlyGame.diffusalBlade,
      item7: items[0].earlyGame.bladeMail,
      item8: items[0].earlyGame.venomSong,
      //////////////////////////////////////
      item9: items[0].coreItems.upBm,
      item10: items[0].coreItems.skullBasher,
      item11: items[0].coreItems.bkb,
      item12: items[0].coreItems.satanic,
      item18: items[0].coreItems.disperser,
      item19: items[0].coreItems.diffusal2,
      item20: items[0].coreItems.diffusalBasher,
      //////////////////////////////////////
      item13: items[0].lateGame.refresher,
      item14: items[0].lateGame.abysalBlade,
      item15: items[0].lateGame.moonYasha,
      item16: items[0].lateGame.aghanimScepter,
      item17: items[0].lateGame.moonShard,
    },
    PudgeInt: {
      item1: items[0].startingItems.grenade,
      item2: items[0].startingItems.nullTalisman,

      //////////////////////////////////////
      item5: items[0].earlyGame.phaseBoots,
      item6: items[0].earlyGame.magCrit,
      item7: items[0].earlyGame.glimerCape,
      item8: items[0].earlyGame.forceStaff,
      //////////////////////////////////////
      item9: items[0].coreItems.octarine,
      item10: items[0].coreItems.upForce,
      item11: items[0].coreItems.upGlimer,
      item12: items[0].coreItems.eblade,
      item18: items[0].coreItems.windWaker,

      //////////////////////////////////////
      item13: items[0].lateGame.refresher,

      item15: items[0].lateGame.moonKaya,
      item16: items[0].lateGame.aghanimScepter,
    },
    PudgeStr: {
      item1: items[0].startingItems.grenade,
      item2: items[0].startingItems.bracer,

      //////////////////////////////////////
      item5: items[0].earlyGame.phaseBoots,
      item8: items[0].earlyGame.soulReaver,
      item6: items[0].earlyGame.spiritVessel,
      item7: items[0].earlyGame.magCrit,

      //////////////////////////////////////
      item9: items[0].coreItems.eblade,
      item10: items[0].coreItems.tarasque,

      item18: items[0].coreItems.sangeYasha,

      //////////////////////////////////////
      item13: items[0].lateGame.moonYasha,

      item15: items[0].lateGame.moonSange,
      item16: items[0].coreItems.shiva,
    },
  },
];

document.addEventListener("DOMContentLoaded", () => {
  const itemBuildsMarkup = document.querySelector(".itemb-pudge-ag");
  if (itemBuildsMarkup) {
    itemBuildsMarkup.innerHTML = itemBuilds
      .map((build) => {
        const pugdeAgBuild = build.PudgeAg;
        return `
        <ul class="heroes-itembuilds">
          <li class="h-ib-list-item"><img class="itembuild-img" src="${pugdeAgBuild.item2}" alt="item-1" width="50" height="40" /></li>
          <li class="h-ib-list-item"><img class="itembuild-img" src="${pugdeAgBuild.item1}" alt="item-3" width="50" height="40" /></li>
          <li class="h-ib-list-item"><img class="itembuild-img" src="${pugdeAgBuild.item5}" alt="item-1" width="50" height="40" /></li>
          <li class="h-ib-list-item"><img class="itembuild-img" src="${pugdeAgBuild.item6}" alt="item-2" width="50" height="40" /></li>
          <li class="h-ib-list-item"><img class="itembuild-img" src="${pugdeAgBuild.item7}" alt="item-3" width="50" height="40" /></li>
          <li class="h-ib-list-item"><img class="itembuild-img" src="${pugdeAgBuild.item8}" alt="item-4" width="50" height="40" /></li>
          <li class="h-ib-list-item"><img class="itembuild-img" src="${pugdeAgBuild.item9}" alt="item-1" width="50" height="40" /></li>
          <li class="h-ib-list-item"><img class="itembuild-img" src="${pugdeAgBuild.item10}" alt="item-2" width="50" height="40" /></li>
          <li class="h-ib-list-item"><img class="itembuild-img" src="${pugdeAgBuild.item11}" alt="item-3" width="50" height="40" /></li>
          <li class="h-ib-list-item"><img class="itembuild-img" src="${pugdeAgBuild.item12}" alt="item-4" width="50" height="40" /></li>
          <li class="h-ib-list-item"><img class="itembuild-img" src="${pugdeAgBuild.item18}" alt="item-4" width="50" height="40" /></li>
          <li class="h-ib-list-item"><img class="itembuild-img" src="${pugdeAgBuild.item19}" alt="item-4" width="50" height="40" /></li>
          <li class="h-ib-list-item"><img class="itembuild-img" src="${pugdeAgBuild.item20}" alt="item-4" width="50" height="40" /></li>
          <li class="h-ib-list-item"><img class="itembuild-img" src="${pugdeAgBuild.item13}" alt="item-1" width="50" height="40" /></li>
          <li class="h-ib-list-item"><img class="itembuild-img" src="${pugdeAgBuild.item14}" alt="item-2" width="50" height="40" /></li>
          <li class="h-ib-list-item"><img class="itembuild-img" src="${pugdeAgBuild.item15}" alt="item-3" width="50" height="40" /></li>
          <li class="h-ib-list-item"><img class="itembuild-img" src="${pugdeAgBuild.item16}" alt="item-4" width="50" height="40" /></li>
          <li class="h-ib-list-item"><img class="itembuild-img" src="${pugdeAgBuild.item17}" alt="item-4" width="50" height="40" /></li>
        </ul>`;
      })
      .join("");
  }

  const itemBuildsMarkupInt = document.querySelector(".itemb-pudge-int");
  if (itemBuildsMarkupInt) {
    itemBuildsMarkupInt.innerHTML = itemBuilds
      .map((build) => {
        const pugdeIntBuild = build.PudgeInt;
        return `
          <ul class="heroes-itembuilds">
          <li class="h-ib-list-item"><img class="itembuild-img" src="${pugdeIntBuild.item2}" alt="item-1" width="50" height="40" /></li>
          <li class="h-ib-list-item"><img class="itembuild-img" src="${pugdeIntBuild.item1}" alt="item-3" width="50" height="40" /></li>
          <li class="h-ib-list-item"><img class="itembuild-img" src="${pugdeIntBuild.item5}" alt="item-1" width="50" height="40" /></li>
          <li class="h-ib-list-item"><img class="itembuild-img" src="${pugdeIntBuild.item6}" alt="item-2" width="50" height="40" /></li>
          <li class="h-ib-list-item"><img class="itembuild-img" src="${pugdeIntBuild.item7}" alt="item-3" width="50" height="40" /></li>
          <li class="h-ib-list-item"><img class="itembuild-img" src="${pugdeIntBuild.item8}" alt="item-4" width="50" height="40" /></li>
          <li class="h-ib-list-item"><img class="itembuild-img" src="${pugdeIntBuild.item9}" alt="item-1" width="50" height="40" /></li>
          <li class="h-ib-list-item"><img class="itembuild-img" src="${pugdeIntBuild.item10}" alt="item-2" width="50" height="40" /></li>
          <li class="h-ib-list-item"><img class="itembuild-img" src="${pugdeIntBuild.item11}" alt="item-3" width="50" height="40" /></li>
          <li class="h-ib-list-item"><img class="itembuild-img" src="${pugdeIntBuild.item12}" alt="item-4" width="50" height="40" /></li>
          <li class="h-ib-list-item"><img class="itembuild-img" src="${pugdeIntBuild.item18}" alt="item-4" width="50" height="40" /></li>
          <li class="h-ib-list-item"><img class="itembuild-img" src="${pugdeIntBuild.item16}" alt="item-4" width="50" height="40" /></li>
          <li class="h-ib-list-item"><img class="itembuild-img" src="${pugdeIntBuild.item15}" alt="item-4" width="50" height="40" /></li>
          <li class="h-ib-list-item"><img class="itembuild-img" src="${pugdeIntBuild.item13}" alt="item-1" width="50" height="40" /></li>
         
        </ul>`;
      })
      .join("");
  }

  const itemBuildsMarkupStr = document.querySelector(".itemb-pudge-str");
  if (itemBuildsMarkupStr) {
    itemBuildsMarkupStr.innerHTML = itemBuilds
      .map((build) => {
        const pugdeStrBuild = build.PudgeStr;
        return `
          <ul class="heroes-itembuilds">
          <li class="h-ib-list-item"><img class="itembuild-img" src="${pugdeStrBuild.item2}" alt="item-1" width="50" height="40" /></li>
          <li class="h-ib-list-item"><img class="itembuild-img" src="${pugdeStrBuild.item1}" alt="item-3" width="50" height="40" /></li>
          <li class="h-ib-list-item"><img class="itembuild-img" src="${pugdeStrBuild.item5}" alt="item-1" width="50" height="40" /></li>
           <li class="h-ib-list-item"><img class="itembuild-img" src="${pugdeStrBuild.item8}" alt="item-4" width="50" height="40" /></li>
          <li class="h-ib-list-item"><img class="itembuild-img" src="${pugdeStrBuild.item6}" alt="item-2" width="50" height="40" /></li>
          <li class="h-ib-list-item"><img class="itembuild-img" src="${pugdeStrBuild.item7}" alt="item-3" width="50" height="40" /></li>
         
          <li class="h-ib-list-item"><img class="itembuild-img" src="${pugdeStrBuild.item9}" alt="item-1" width="50" height="40" /></li>
          <li class="h-ib-list-item"><img class="itembuild-img" src="${pugdeStrBuild.item10}" alt="item-2" width="50" height="40" /></li>
         
          
          <li class="h-ib-list-item"><img class="itembuild-img" src="${pugdeStrBuild.item18}" alt="item-4" width="50" height="40" /></li>
           <li class="h-ib-list-item"><img class="itembuild-img" src="${pugdeStrBuild.item15}" alt="item-4" width="50" height="40" /></li>
          <li class="h-ib-list-item"><img class="itembuild-img" src="${pugdeStrBuild.item13}" alt="item-1" width="50" height="40" /></li>
          <li class="h-ib-list-item"><img class="itembuild-img" src="${pugdeStrBuild.item16}" alt="item-4" width="50" height="40" /></li>
         
         
        </ul>`;
      })
      .join("");
  }
});
