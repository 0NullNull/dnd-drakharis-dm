---
layout: home
title: "Drakharis Player Wiki"
---

# Welcome to <br>the Drakharis Player Wiki

Explore the world of our campaign by checking out these sections:  

- [Characters](characters/)
- [Items](items/)
- [Lore](lore/)
- [Mechanics](mechanics/)
- [Stories](story/)
- [Updates](updates)
- [DM-Notes](password)

<br>
<br>
<div>
  <audio id="prologueAudio" controls>
    <source src="{{ '/assets/sounds/drakharis.mp3' | relative_url }}?v={{ new Date().getTime() }}" type="audio/mpeg">
    Your browser does not support the audio element.
  </audio>
  <script>
        const audioElement = document.getElementById('prologueAudio');
        audioElement.volume = 0.2;
        audioElement.onended = function() {
            audioElement.currentTime = 0; // Reset to the start after it finishes
        };
    </script>
</div>