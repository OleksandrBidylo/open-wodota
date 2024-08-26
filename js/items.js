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
    },
    coreItems: {
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

      satanic: `../img/satanic.png`,
      skadi: `../img/skadi.png`,
      pike: `../img/pike.png`,
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
      item7: items[0].earlyGame.orchid,
      item8: items[0].earlyGame.venomSong,
      //////////////////////////////////////
      item9: items[0].coreItems.bloodThorn,
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
  },
];

const itemBuildsMarkup = document.querySelector(".itemb");
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
